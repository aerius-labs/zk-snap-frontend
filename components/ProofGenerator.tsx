import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function ProofGenerator({workerInstance, setWorker, handleVote}:any) {
  const input = {
    encryptionPublicKeyStr:
      '{"n":"5358176902707662723","g":"15652930371693528948330294819057123893","n_2":"28710059720709881718070834821523774729"}',
    membersRoot:
      '12537047845786425835955485194176141582817075616403125832495965144538210006522',
    userPublicKeyStr:
      '"B62qmtEXarqzV17a9gRxRigH9SRNTNfzgnk4Wqo3ypKrKZEFpikD6MC"',
    proposalIdStr: '1',
    encryptedVoteStr: [
      '14177178720451213193463700992417904757',
      '14462477808488439441966359492129539654',
    ],
    userSignatureStr:
      '{"r":"25845644960535243148573488362109998753742699375540778073290485375102627389","s":"3237988564308656750371636244672463356544462665094180737268378072547512628810"}',
    voteStr: ['2', '1'],
    membersProofStr:
      '{"path":["15566632703594953537805913488852348009970841925851741778451582950177384554518","26474145041484070233779901372624654086873553574521633661985193009632012492134","2447983280988565496525732146838829227220882878955914181821218085513143393976","544619463418997333856881110951498501703454628897449993518845662251180546746","20468198949394563802460512965219839480612000520504690501918527632215047268421","16556836945641263257329399459944072214107361158323688202689648863681494824075","15433636137932294330522564897643259724602670702144398296133714241278885195605"],"isLeft":[true,true,true,true,true,true,true]}',
    r_encryptionStr: '2618920073853792359',
  };

  async function handleButtonClick() {
    try {
      console.log('Generating Proof');
      const inputData = {
        encryptionPublicKeyStr: input.encryptionPublicKeyStr,
        membersRootStr: input.membersRoot,
        userPublicKeyStr: input.userPublicKeyStr.toString(),
        proposalIdStr: input.proposalIdStr.toString(),
        encryptedVoteStr: input.encryptedVoteStr,
        userSignatureStr: input.userSignatureStr,
        voteStr: input.voteStr.map((v) => v.toString()),
        memberProofStr: input.membersProofStr,
        r_encryptionStr: input.r_encryptionStr.toString(),
    
      };
      console.log('Prepared Data', inputData)
      if (workerInstance.current) {
        console.log('Inside workerInstance');
        workerInstance.current.postMessage(inputData);
      }
    } catch (error) {
        console.error("Error generating proof:", error);
    }
}
  return (
    <main
      className={`items-center justify-center ${inter.className}`}
    >
      <button className='block w-full mb-4 font-good-times cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md' onClick={() => {
        if (typeof window !== 'undefined') {
          handleVote();
          handleButtonClick();
        }
      }}>Vote</button>
    </main>
  )
}