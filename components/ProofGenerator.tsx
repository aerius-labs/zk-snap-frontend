import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { generateUserProof } from '@/dist/src/main';

export default function ProofGenerator() {
  const userData = {
    userPublicKey: "B62qjrPjQLNGmNsshUVHTt6FLexY4Hesz3dwQ7hHwv8D6PsZyEiVQnd",
    userSignatureStr: {
      r: "1010264315652318956390054453939746030083760158329984550460875920039829572353",
      s: "9102918460768111112139398715672970375440193827619000829983875178779760282991"
    },
    voteStr: 1,
    voteWeightStr: 50,
    encryptedVoteStr: "32616191520610186610872321214106286575",
    encryptionPublicKeyStr: {
      n: "7636519558108036597",
      g: "26614765040325072608768085859501501611",
      n_2: "58316430961366562535952200158291340409"
    },
    userBalanceStr: 100,
    nullifierStr: {
      publicKey: {
        x: "7055932771958361733261423907046100515186693209729237011851393356345001817129",
        y: "3686608068615286655987069280094709742016150048503921763207486436075518056813"
      },
      private: {
        c: "24178802570503380977259214411530348065754742682678240610180894869616651168216",
        g_r: {
          x: "12557691816453503377081641014080844357834396891125427928000754035721543651505",
          y: "24123086740821668583795681153448698530974399934183460296581230275047140248217"
        },
        h_m_pk_r: {
          x: "3173521916349077832073447454943027778050921625699350328030604819743569366646",
          y: "6012888684271935793706143797201057486979196117529773677214457360265220805811"
        }
      },
      public: {
        nullifier: {
          x: "20465274933234289505284071530668206926346489695015908778692256584221978556040",
          y: "20333730706448390956347798358196385869810078277803958403157446179773703191785"
        },
        s: "19450266394876111118580621571858836842461657241982867496697984928057107120117"
      }
    },
    membersRoot: "14173413035875358633482546130553096916105786850430359752114137397763201377369",
    proposalId: 1,
    membersProofStr: {
      path: [
        "17484753562586992636611363224300471236552723283269383215066033417937617145548",
        "6999638791258018300820673790727703346032325139398583026750768268764419587952",
        "2447983280988565496525732146838829227220882878955914181821218085513143393976",
        "544619463418997333856881110951498501703454628897449993518845662251180546746",
        "20468198949394563802460512965219839480612000520504690501918527632215047268421",
        "16556836945641263257329399459944072214107361158323688202689648863681494824075",
        "15433636137932294330522564897643259724602670702144398296133714241278885195605"
      ],
      isLeft: [true, true, true, true, true, true, true]
    }
  };

  async function handleButtonClick() {
    try {
      console.log('Generating Proof');
      const inputData = {
        nullifierStr: JSON.stringify(userData.nullifierStr), 
        encryptionPublicKeyStr: JSON.stringify(userData.encryptionPublicKeyStr), 
        membersRootStr: userData.membersRoot, 
        userPublicKeyStr: JSON.stringify(userData.userPublicKey), 
        proposalIdStr: userData.proposalId.toString(), 
        encryptedVoteStr: userData.encryptedVoteStr, 
        userSignatureStr: JSON.stringify(userData.userSignatureStr),
        voteStr: userData.voteStr.toString(), 
        voteWeightStr: userData.voteWeightStr.toString(), 
        userBalanceStr: userData.userBalanceStr.toString(), 
        memberProofStr: JSON.stringify(userData.membersProofStr)
      };
      console.log('Prepared Data', inputData)
      generateUserProof(inputData).then((res)=>{
        console.log("User Proof :", res);
      })
    } catch (error) {
        console.error("Error generating proof:", error);
    }
}
  return (
    <main
      className={`items-center justify-center ${inter.className}`}
    >
      <button className='text-gray-200' onClick={() => {
        if (typeof window !== 'undefined') {
          handleButtonClick();
        }
      }}>Vote</button>
    </main>
  )
}