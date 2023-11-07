import { Field, Nullifier, PublicKey, Signature } from 'o1js';
declare const EncryptionPublicKey_base: (new (value: {
    n: import("o1js/dist/node/lib/field").Field;
    g: import("o1js/dist/node/lib/field").Field;
    n_2: import("o1js/dist/node/lib/field").Field;
}) => {
    n: import("o1js/dist/node/lib/field").Field;
    g: import("o1js/dist/node/lib/field").Field;
    n_2: import("o1js/dist/node/lib/field").Field;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    n: import("o1js/dist/node/lib/field").Field;
    g: import("o1js/dist/node/lib/field").Field;
    n_2: import("o1js/dist/node/lib/field").Field;
}> & {
    toInput: (x: {
        n: import("o1js/dist/node/lib/field").Field;
        g: import("o1js/dist/node/lib/field").Field;
        n_2: import("o1js/dist/node/lib/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        n: import("o1js/dist/node/lib/field").Field;
        g: import("o1js/dist/node/lib/field").Field;
        n_2: import("o1js/dist/node/lib/field").Field;
    }) => {
        n: string;
        g: string;
        n_2: string;
    };
    fromJSON: (x: {
        n: string;
        g: string;
        n_2: string;
    }) => {
        n: import("o1js/dist/node/lib/field").Field;
        g: import("o1js/dist/node/lib/field").Field;
        n_2: import("o1js/dist/node/lib/field").Field;
    };
};
export declare class EncryptionPublicKey extends EncryptionPublicKey_base {
    static create(n: Field, g: Field, n_2: Field): EncryptionPublicKey;
    encrypt(msg: Field, r: Field): import("o1js/dist/node/lib/field").Field;
    add(c1: Field, c2: Field): import("o1js/dist/node/lib/field").Field;
}
declare const UserState_base: (new (value: {
    nullifier: Nullifier;
    encryptionPublicKey: EncryptionPublicKey;
    membersRoot: import("o1js/dist/node/lib/field").Field;
    userPublicKey: PublicKey;
    proposalId: import("o1js/dist/node/lib/field").Field;
    encrypted_vote: import("o1js/dist/node/lib/field").Field;
}) => {
    nullifier: Nullifier;
    encryptionPublicKey: EncryptionPublicKey;
    membersRoot: import("o1js/dist/node/lib/field").Field;
    userPublicKey: PublicKey;
    proposalId: import("o1js/dist/node/lib/field").Field;
    encrypted_vote: import("o1js/dist/node/lib/field").Field;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    nullifier: Nullifier;
    encryptionPublicKey: EncryptionPublicKey;
    membersRoot: import("o1js/dist/node/lib/field").Field;
    userPublicKey: PublicKey;
    proposalId: import("o1js/dist/node/lib/field").Field;
    encrypted_vote: import("o1js/dist/node/lib/field").Field;
}> & {
    toInput: (x: {
        nullifier: Nullifier;
        encryptionPublicKey: EncryptionPublicKey;
        membersRoot: import("o1js/dist/node/lib/field").Field;
        userPublicKey: PublicKey;
        proposalId: import("o1js/dist/node/lib/field").Field;
        encrypted_vote: import("o1js/dist/node/lib/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        nullifier: Nullifier;
        encryptionPublicKey: EncryptionPublicKey;
        membersRoot: import("o1js/dist/node/lib/field").Field;
        userPublicKey: PublicKey;
        proposalId: import("o1js/dist/node/lib/field").Field;
        encrypted_vote: import("o1js/dist/node/lib/field").Field;
    }) => {
        nullifier: {
            publicKey: {
                x: string;
                y: string;
            };
            public: {
                nullifier: {
                    x: string;
                    y: string;
                };
                s: string;
            };
            private: {
                c: string;
                g_r: {
                    x: string;
                    y: string;
                };
                h_m_pk_r: {
                    x: string;
                    y: string;
                };
            };
        };
        encryptionPublicKey: {
            n: string;
            g: string;
            n_2: string;
        };
        membersRoot: string;
        userPublicKey: string;
        proposalId: string;
        encrypted_vote: string;
    };
    fromJSON: (x: {
        nullifier: {
            publicKey: {
                x: string;
                y: string;
            };
            public: {
                nullifier: {
                    x: string;
                    y: string;
                };
                s: string;
            };
            private: {
                c: string;
                g_r: {
                    x: string;
                    y: string;
                };
                h_m_pk_r: {
                    x: string;
                    y: string;
                };
            };
        };
        encryptionPublicKey: {
            n: string;
            g: string;
            n_2: string;
        };
        membersRoot: string;
        userPublicKey: string;
        proposalId: string;
        encrypted_vote: string;
    }) => {
        nullifier: Nullifier;
        encryptionPublicKey: EncryptionPublicKey;
        membersRoot: import("o1js/dist/node/lib/field").Field;
        userPublicKey: PublicKey;
        proposalId: import("o1js/dist/node/lib/field").Field;
        encrypted_vote: import("o1js/dist/node/lib/field").Field;
    };
};
export declare class UserState extends UserState_base {
    static create(nullifier: Nullifier, encryptionPublicKey: EncryptionPublicKey, membersRoot: Field, userPublicKey: PublicKey, proposalId: Field, encrypted_vote: Field): UserState;
}
declare const UserMerkleWitness_base: typeof import("o1js/dist/node/lib/merkle_tree").BaseMerkleWitness;
export declare class UserMerkleWitness extends UserMerkleWitness_base {
}
export declare const UserCircuit: {
    name: string;
    compile: () => Promise<{
        verificationKey: string;
    }>;
    verify: (proof: import("o1js/dist/node/lib/proof_system").Proof<UserState, void>) => Promise<boolean>;
    digest: () => string;
    analyzeMethods: () => {
        rows: number;
        digest: string;
        result: unknown;
        gates: import("o1js/dist/node/snarky").Gate[];
        publicInputSize: number;
    }[];
    publicInputType: typeof UserState;
    publicOutputType: import("o1js/dist/node/lib/circuit_value").ProvablePureExtended<void, null>;
} & {
    generateVoteProof: (publicInput: UserState, ...args: [Signature, import("o1js/dist/node/lib/field").Field, import("o1js/dist/node/lib/field").Field, import("o1js/dist/node/lib/field").Field, import("o1js/dist/node/lib/field").Field, UserMerkleWitness] & any[]) => Promise<import("o1js/dist/node/lib/proof_system").Proof<UserState, void>>;
};
export {};
