import { Experimental, Field, MerkleWitness, Poseidon, Provable, PublicKey, Signature, Struct, } from 'o1js';
import { exp, mulMod } from '../utils/circuit.utils';
export class EncryptionPublicKey extends Struct({
    n: Field,
    g: Field,
    n_2: Field,
}) {
    static create(n, g, n_2) {
        return new EncryptionPublicKey({ n, g, n_2 });
    }
    encrypt(msg, r) {
        const g_m = exp(this.g, msg, this.n_2);
        const r_n = exp(r, this.n, this.n_2);
        const c = mulMod(g_m, r_n, this.n_2);
        return c;
    }
    add(c1, c2) {
        return mulMod(c1, c2, this.n_2);
    }
}
export class UserState extends Struct({
    encryptionPublicKey: EncryptionPublicKey,
    membersRoot: Field,
    userPublicKey: PublicKey,
    proposalId: Field,
    encrypted_vote: Provable.Array(Field, 2),
}) {
    static create(encryptionPublicKey, membersRoot, userPublicKey, proposalId, encrypted_vote) {
        return new UserState({
            encryptionPublicKey,
            membersRoot,
            userPublicKey,
            proposalId,
            encrypted_vote,
        });
    }
}
export class UserMerkleWitness extends MerkleWitness(8) {
}
export const UserCircuit = Experimental.ZkProgram({
    publicInput: UserState,
    methods: {
        generateProof: {
            privateInputs: [
                Signature,
                Provable.Array(Field, 2),
                Field,
                UserMerkleWitness,
            ],
            method(userState, userSignature, vote, r_encryption, merkleProof) {
                Provable.log('1');
                const merkleLeaf = Poseidon.hash([userState.userPublicKey.x]);
                Provable.log('2');
                merkleProof
                    .calculateRoot(merkleLeaf)
                    .assertEquals(userState.membersRoot);
                Provable.log('3');
                for (let i = 0; i < 2; i++) {
                    const encryptedVote = userState.encryptionPublicKey.encrypt(vote[i], r_encryption);
                    encryptedVote.assertEquals(userState.encrypted_vote[i]);
                }
                Provable.log('4');
                userSignature.verify(userState.userPublicKey, [
                    userState.userPublicKey.x,
                    userState.proposalId,
                ]);
                Provable.log('5');
            },
        },
    },
});
//# sourceMappingURL=user.circuit.js.map