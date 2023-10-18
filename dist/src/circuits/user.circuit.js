import { Experimental, Field, MerkleWitness, Nullifier, Poseidon, PublicKey, Signature, Struct, } from 'o1js';
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
    nullifier: Nullifier,
    encryptionPublicKey: EncryptionPublicKey,
    membersRoot: Field,
    userPublicKey: PublicKey,
    proposalId: Field,
    encrypted_vote: Field,
}) {
    static create(nullifier, encryptionPublicKey, membersRoot, userPublicKey, proposalId, encrypted_vote) {
        return new UserState({
            nullifier,
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
        generateVoteProof: {
            privateInputs: [Signature, Field, Field, Field, Field, UserMerkleWitness],
            method(userState, userSignature, vote, voteWeight, r_encryption, userBalance, membersProof) {
                voteWeight.assertLessThanOrEqual(userBalance);
                const merkleLeaf = Poseidon.hash([
                    userState.userPublicKey.x,
                    userBalance,
                ]);
                membersProof
                    .calculateRoot(merkleLeaf)
                    .assertEquals(userState.membersRoot);
                const message = vote.mul(voteWeight);
                const encryptedVote = userState.encryptionPublicKey.encrypt(message, r_encryption);
                encryptedVote.assertEquals(userState.encrypted_vote);
                userSignature.verify(userState.userPublicKey, [
                    userState.userPublicKey.x,
                    userState.proposalId,
                ]);
                userState.nullifier.verify([
                    userState.userPublicKey.x,
                    userState.proposalId,
                ]);
            },
        },
    },
});
//# sourceMappingURL=user.circuit.js.map