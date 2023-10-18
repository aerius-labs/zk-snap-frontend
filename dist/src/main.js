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
// const main = async () => {
//   const input = {
//     userPublicKey: 'B62qjrPjQLNGmNsshUVHTt6FLexY4Hesz3dwQ7hHwv8D6PsZyEiVQnd',
//     userSignatureStr: {
//       r: '1010264315652318956390054453939746030083760158329984550460875920039829572353',
//       s: '9102918460768111112139398715672970375440193827619000829983875178779760282991',
//     },
//     voteStr: 1,
//     voteWeightStr: 50,
//     encryptedVoteStr: '32616191520610186610872321214106286575',
//     encryptionPublicKeyStr: {
//       n: '7636519558108036597',
//       g: '26614765040325072608768085859501501611',
//       n_2: '58316430961366562535952200158291340409',
//     },
//     userBalanceStr: 100,
//     nullifierStr: {
//       publicKey: {
//         x: '7055932771958361733261423907046100515186693209729237011851393356345001817129',
//         y: '3686608068615286655987069280094709742016150048503921763207486436075518056813',
//       },
//       private: {
//         c: '24178802570503380977259214411530348065754742682678240610180894869616651168216',
//         g_r: {
//           x: '12557691816453503377081641014080844357834396891125427928000754035721543651505',
//           y: '24123086740821668583795681153448698530974399934183460296581230275047140248217',
//         },
//         h_m_pk_r: {
//           x: '3173521916349077832073447454943027778050921625699350328030604819743569366646',
//           y: '6012888684271935793706143797201057486979196117529773677214457360265220805811',
//         },
//       },
//       public: {
//         nullifier: {
//           x: '20465274933234289505284071530668206926346489695015908778692256584221978556040',
//           y: '20333730706448390956347798358196385869810078277803958403157446179773703191785',
//         },
//         s: '19450266394876111118580621571858836842461657241982867496697984928057107120117',
//       },
//     },
//     membersRoot:
//       '14173413035875358633482546130553096916105786850430359752114137397763201377369',
//     proposalId: 1,
//     membersProofStr: {
//       path: [
//         '17484753562586992636611363224300471236552723283269383215066033417937617145548',
//         '6999638791258018300820673790727703346032325139398583026750768268764419587952',
//         '2447983280988565496525732146838829227220882878955914181821218085513143393976',
//         '544619463418997333856881110951498501703454628897449993518845662251180546746',
//         '20468198949394563802460512965219839480612000520504690501918527632215047268421',
//         '16556836945641263257329399459944072214107361158323688202689648863681494824075',
//         '15433636137932294330522564897643259724602670702144398296133714241278885195605',
//       ],
//       isLeft: [true, true, true, true, true, true, true],
//     },
//   };
//   const proof = await generateUserProof({
//     nullifierStr: JSON.stringify(input.nullifierStr),
//     encryptionPublicKeyStr: JSON.stringify(input.encryptionPublicKeyStr),
//     membersRootStr: input.membersRoot,
//     userPublicKeyStr: JSON.stringify(input.userPublicKey),
//     proposalIdStr: input.proposalId.toString(),
//     encryptedVoteStr: input.encryptedVoteStr,
//     userSignatureStr: JSON.stringify(input.userSignatureStr),
//     voteStr: input.voteStr.toString(),
//     voteWeightStr: input.voteWeightStr.toString(),
//     userBalanceStr: input.userBalanceStr.toString(),
//     memberProofStr: JSON.stringify(input.membersProofStr),
//   });
//   console.log('Proof: ', proof);
// };
// main();
//# sourceMappingURL=main.js.map