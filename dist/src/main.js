import { PublicKey, Signature } from 'o1js';
import { convertToField } from './utils/circuit.utils';
import { EncryptionPublicKey, UserCircuit, UserMerkleWitness, UserState, } from './circuits/user.circuit';
export const generateUserProof = async (inputs) => {
    const { encryptionPublicKeyStr, membersRootStr, userPublicKeyStr, proposalIdStr, encryptedVoteStr, userSignatureStr, voteStr, memberProofStr, r_encryptionStr, } = inputs;
    console.log('Input Data', inputs);
    const encryptionPublicKeyJson = JSON.parse(encryptionPublicKeyStr);
    console.log(1);
    const encryptionPublicKey = EncryptionPublicKey.create(convertToField(encryptionPublicKeyJson.n), convertToField(encryptionPublicKeyJson.g), convertToField(encryptionPublicKeyJson._n2));
    console.log(2);
    const membersRoot = convertToField(membersRootStr);
    console.log(3);
    const userPublicKey = PublicKey.fromJSON(JSON.parse(userPublicKeyStr));
    console.log(4);
    const proposalId = convertToField(proposalIdStr);
    const encrypted_vote = encryptedVoteStr.map((v) => convertToField(v));
    console.log(5);
    const userSignature = Signature.fromJSON(JSON.parse(userSignatureStr));
    console.log(6);
    const vote = voteStr.map((v) => convertToField(v));
    console.log(7);
    const membersProof = UserMerkleWitness.fromJSON(JSON.parse(memberProofStr));
    console.log(8);
    const r_encryption = convertToField(r_encryptionStr);
    console.log(9);
    const userState = UserState.create(encryptionPublicKey, membersRoot, userPublicKey, proposalId, encrypted_vote);
    console.log('Inputs read');
    let time = Date.now();
    await UserCircuit.compile();
    console.log('Compile time: ', (Date.now() - time) / 1000, 's');
    time = Date.now();
    const proof = await UserCircuit.generateProof(userState, userSignature, vote, r_encryption, membersProof);
    console.log('Generate proof time: ', (Date.now() - time) / 1000, 's');
    if (await UserCircuit.verify(proof)) {
        return JSON.stringify(proof.toJSON());
    }
    else {
        throw new Error('Proof is not valid');
    }
};
export const generateUserCircuitWitness = async (inputs) => {
    // TODO - create nullifier
    // TODO - fetch/import encryptionPublicKey from proposals api
    // TODO - fetch/import membersRoot from proposals api
    // TODO - get userPublicKey from wallet
    // TODO - get proposalId from proposals api
    // TODO - create encrypted vote
    // TODO - create userSignature using wallet
    // TODO - get vote from UI
    // TODO - get memberProof from daos api
};
// const main = async () => {
//   const input = {
//     encryptionPublicKeyStr:
//       '{"n":"5358176902707662723","g":"15652930371693528948330294819057123893","n_2":"28710059720709881718070834821523774729"}',
//     membersRoot:
//       '12537047845786425835955485194176141582817075616403125832495965144538210006522',
//     userPublicKeyStr:
//       '"B62qmtEXarqzV17a9gRxRigH9SRNTNfzgnk4Wqo3ypKrKZEFpikD6MC"',
//     proposalIdStr: '1',
//     encryptedVoteStr: [
//       '14177178720451213193463700992417904757',
//       '14462477808488439441966359492129539654',
//     ],
//     userSignatureStr:
//       '{"r":"25845644960535243148573488362109998753742699375540778073290485375102627389","s":"3237988564308656750371636244672463356544462665094180737268378072547512628810"}',
//     voteStr: ['2', '1'],
//     membersProofStr:
//       '{"path":["15566632703594953537805913488852348009970841925851741778451582950177384554518","26474145041484070233779901372624654086873553574521633661985193009632012492134","2447983280988565496525732146838829227220882878955914181821218085513143393976","544619463418997333856881110951498501703454628897449993518845662251180546746","20468198949394563802460512965219839480612000520504690501918527632215047268421","16556836945641263257329399459944072214107361158323688202689648863681494824075","15433636137932294330522564897643259724602670702144398296133714241278885195605"],"isLeft":[true,true,true,true,true,true,true]}',
//     r_encryptionStr: '2618920073853792359',
//   };
//   const proof = await generateUserProof({
//     encryptionPublicKeyStr: input.encryptionPublicKeyStr,
//     membersRootStr: input.membersRoot,
//     userPublicKeyStr: input.userPublicKeyStr.toString(),
//     proposalIdStr: input.proposalIdStr.toString(),
//     encryptedVoteStr: input.encryptedVoteStr,
//     userSignatureStr: input.userSignatureStr,
//     voteStr: input.voteStr.map((v) => v.toString()),
//     memberProofStr: input.membersProofStr,
//     r_encryptionStr: input.r_encryptionStr.toString(),
//   });
//   console.log('Proof: ', proof);
// };
// main();
//# sourceMappingURL=main.js.map