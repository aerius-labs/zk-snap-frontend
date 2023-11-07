import { Field, Nullifier, PublicKey, Signature } from 'o1js';
import { convertToField } from './utils/circuit.utils';
import { EncryptionPublicKey, UserCircuit, UserMerkleWitness, UserState, } from './circuits/user.circuit';
export const generateUserProof = async (inputs) => {
    const { nullifierStr, encryptionPublicKeyStr, membersRootStr, userPublicKeyStr, proposalIdStr, encryptedVoteStr, userSignatureStr, voteStr, voteWeightStr, userBalanceStr, memberProofStr, } = inputs;
    const nullifier = Nullifier.fromJSON(JSON.parse(nullifierStr));
    const encryptionPublicKeyJson = JSON.parse(encryptionPublicKeyStr);
    const encryptionPublicKey = EncryptionPublicKey.create(convertToField(encryptionPublicKeyJson.n), convertToField(encryptionPublicKeyJson.g), convertToField(encryptionPublicKeyJson.n_2));
    const membersRoot = convertToField(membersRootStr);
    const userPublicKey = PublicKey.fromJSON(JSON.parse(userPublicKeyStr));
    const proposalId = convertToField(proposalIdStr);
    const encrypted_vote = convertToField(encryptedVoteStr);
    const userSignature = Signature.fromJSON(JSON.parse(userSignatureStr));
    const vote = convertToField(voteStr);
    const voteWeight = convertToField(voteWeightStr);
    const userBalance = convertToField(userBalanceStr);
    const membersProof = UserMerkleWitness.fromJSON(JSON.parse(memberProofStr));
    //   const r_encryption = Field(getRandomNBitNumber(62));
    const r_encryption = Field(6942);
    const userState = UserState.create(nullifier, encryptionPublicKey, membersRoot, userPublicKey, proposalId, encrypted_vote);
    console.log('Inputs read');
    let time = Date.now();
    await UserCircuit.compile();
    console.log('Compile time: ', (Date.now() - time) / 1000, 's');
    time = Date.now();
    const proof = await UserCircuit.generateVoteProof(userState, userSignature, vote, voteWeight, r_encryption, userBalance, membersProof);
    console.log('Generate proof time: ', (Date.now() - time) / 1000, 's');
    console.log('Proof Generated', proof);
    if (await UserCircuit.verify(proof)) {
        return JSON.stringify(proof.toJSON());
    }
    else {
        throw new Error('Proof is not valid');
    }
};
//# sourceMappingURL=main.js.map