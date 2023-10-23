import { useState, useEffect, useRef } from 'react';
import { Field, PublicKey, Signature } from 'o1js';
import { getRandomNBitNumber, uuidToBigInt, bs58ToBigInt } from '@/utils/helperFunctions';
import * as paillierBigint from 'paillier-bigint'

export default function Vote({daoId, proposalId, membersRoot, encryptionKeys}:any) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [accountAddress, setAccountAddress] = useState('');
  const [disabledProposalIds, setDisabledProposalIds] = useState([]);
  const [alreadyVotedProposalIds, setAlreadyVotedProposalIds] = useState([]);

  const handleButtonClick = () => {
    setModalOpen(true);
  }
  const handleOptionClick = (value: number) => {
    setActiveButton(value);
  }
  const handleOutsideClick = (e:any) => {
    if (e.target.id === "modal") {
      setModalOpen(false);
    }
  }
  const workerInstance = useRef<Worker | null>(null);
  useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem('walletAddress');
    const disabledProposals = localStorage.getItem('disabledProposalIds');
    const alreadyVotedIds = localStorage.getItem('alreadyVotedProposalIds');
    if (storedWalletAddress) {
      setAccountAddress(storedWalletAddress);
    }
    if(disabledProposals){
      const parsedDisabledProposalIds = JSON.parse(disabledProposals);
      setDisabledProposalIds(parsedDisabledProposalIds);
    }
    if(alreadyVotedIds){
      const parsedAlreadyVotedIds = JSON.parse(alreadyVotedIds);
      setAlreadyVotedProposalIds(parsedAlreadyVotedIds)
    }
  }, []);
  const handleVote = async() => {
    if(activeButton===0){
      alert('Please Select any option first');
      return;
    }
    if((disabledProposalIds.length === 0 ) && !alreadyVotedProposalIds.includes(proposalId)){
      setModalOpen(false);
      await import('./proof.worker.js').then((WorkerModule:any) => {
        workerInstance.current = new WorkerModule.default() as Worker;
        console.log("Worker loaded:", workerInstance);
        workerInstance.current.onmessage = (event:any) => {
          console.log('Getting the Result from Worker', event.data);
          fetch(`http://localhost:3001/api/postProof?proposalId=${proposalId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(event.data),
          });
          workerInstance.current?.terminate();
          const updatedDisabledProposalIds = disabledProposalIds.filter((id) => id !== proposalId);
          setDisabledProposalIds(updatedDisabledProposalIds);
          localStorage.setItem('disabledProposalIds', JSON.stringify(updatedDisabledProposalIds));
          const updatedVotedIds = [...alreadyVotedProposalIds, proposalId];
          setAlreadyVotedProposalIds(updatedVotedIds);
          localStorage.setItem('alreadyVotedProposalIds', JSON.stringify(updatedVotedIds))

        };
        workerInstance.current.onerror = (error: any) => {
          console.error("Worker error:", error);
          workerInstance.current?.terminate();
          const updatedDisabledProposalIds = disabledProposalIds.filter((id) => id !== proposalId);
          setDisabledProposalIds(updatedDisabledProposalIds);
          localStorage.setItem('disabledProposalIds', JSON.stringify(updatedDisabledProposalIds));
        };
      });
    if(window.mina){
      const accounts = await window.mina.getAccounts();
      if(accounts.length == 0){
        const data = await window.mina.requestAccounts().catch(err => err);
        if (!data.message && Array.isArray(data) && data.length > 0) {
          sessionStorage.setItem('walletAddress', data[0]);
          setAccountAddress(data[0]);
        }
      }
      console.log('API key', encryptionKeys.public_key);
      const n = JSON.parse(encryptionKeys.public_key).n;
      const g = JSON.parse(encryptionKeys.public_key).g;
      console.log('N,G', n, g);
      const encryptionPublicKey = new paillierBigint.PublicKey(BigInt(n.slice(0,-1)), BigInt(g.slice(0,-1)));
      console.log('EncryptionPublic',encryptionPublicKey)
      const r_encryption: Field = Field(getRandomNBitNumber(63));
      console.log('R', r_encryption)
      const encryptedVote = [];
      const vote = [activeButton.toString(),(3-activeButton).toString()];
      console.log('vote', vote);
      for (let i = 0; i < 2; i++) {
        console.log('Inside For loop', BigInt(vote[i]), r_encryption.toBigInt());
        const enc = encryptionPublicKey.encrypt(
          BigInt(vote[i]),
          r_encryption.toBigInt()
        );
        encryptedVote.push(enc.toString());
      }
      console.log('Encrypted Vote Value', encryptedVote);
      const response = await fetch(`http://localhost:3001/api/getMerkleProof?daoId=${daoId}&memberPublicKey=${accountAddress}`)
      if (!response.ok) {
        throw new Error('Network response was not ok');
        return;
      }
      const membersProofStr = await response.text();
      let signFieldsResult;
      try {
        signFieldsResult = await window.mina.signFields({
          message: [PublicKey.fromBase58(accountAddress).x.toString(), Field(uuidToBigInt(proposalId)).toString()],
        })
      } catch (error: any) {
        console.log(error.message, error.code)
        return;
      }
      console.log('encrypt',encryptionPublicKey)
      console.log('N', encryptionPublicKey.n.toString())

      const encryptionPublicKeyStr = {
        n: encryptionPublicKey.n.toString(),
        _n2: encryptionPublicKey._n2.toString(),
        g: encryptionPublicKey.g.toString()
      }
      console.log('encryptionPublicKeyStr',encryptionPublicKeyStr);
      console.log('encryptionPublicKeyStrinJson',JSON.stringify(encryptionPublicKeyStr));
      
      // Convert the modified JSON object back to a JSON string
      try {
        console.log('Generating Proof');
        const inputData = {
          encryptionPublicKeyStr: JSON.stringify(encryptionPublicKeyStr),
          membersRootStr: membersRoot,
          userPublicKeyStr: JSON.stringify(accountAddress.toString()),
          proposalIdStr: uuidToBigInt(proposalId),
          encryptedVoteStr: encryptedVote,
          userSignatureStr: JSON.stringify(Signature.fromBase58(signFieldsResult.signature).toJSON()),
          voteStr: vote.map((v) => v.toString()),
          memberProofStr: JSON.parse(membersProofStr),
          r_encryptionStr: r_encryption.toString(),
        };
        console.log('Prepared Data', inputData)
        console.log(membersRoot)
        if (workerInstance.current) {
          const updatedDisabledProposalIds = [...disabledProposalIds, proposalId];
          setDisabledProposalIds(updatedDisabledProposalIds);
          localStorage.setItem('disabledProposalIds', JSON.stringify(updatedDisabledProposalIds));
          console.log('Inside workerInstance');
          workerInstance.current.postMessage(inputData);
        }
      } catch (error) {
          console.error("Error generating proof:", error);
      }
    }
  }else{
    if(disabledProposalIds.length>0){
      alert("Proof Generation is already running for some post!");
    }else{
      alert("You have already Voted");
    }
  }
}
  return (
    <div className="flex flex-col items-center mb-4">
      <button disabled={disabledProposalIds.length>0 || alreadyVotedProposalIds.includes(proposalId)} onClick={handleButtonClick} className={`${(alreadyVotedProposalIds.includes(proposalId) || disabledProposalIds.includes(proposalId))?'bg-gray-500':''} text-lg w-full tracking-widest font-good-times p-4 rounded-xl bg-green-500 flex justify-center items-center`}>
        {disabledProposalIds.includes(proposalId)?'VOTING...':alreadyVotedProposalIds.includes(proposalId)?'VOTED':'VOTE'}
      </button>
      {isModalOpen && (
        <div id="modal" onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black border border-custom-purple w-3/4 md:w-1/4 flex flex-col justify-center rounded-lg py-8 px-10 text-center">
            <button
                onClick={handleVote}
                className={`block bg-green-500 mb-4 font-good-times cursor-pointer p-2 border-2 border-custom-purple text-gray-500 rounded-md`}
            >
                VOTE
            </button>
            <button
                onClick={() => handleOptionClick(2)}
                className={`block mb-4 font-good-times cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 2 ? 'text-white bg-custom-purple' : ''}`}
            >
                YES
            </button>

            <button
                onClick={() => handleOptionClick(1)}
                className={`block mb-4 font-good-times cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 1 ? 'text-white bg-custom-purple' : ''}`}
            >
                NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
