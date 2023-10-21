interface UserCircuitInputs {
    encryptionPublicKeyStr: string;
    membersRootStr: string;
    userPublicKeyStr: string;
    proposalIdStr: string;
    encryptedVoteStr: string[];
    userSignatureStr: string;
    voteStr: string[];
    memberProofStr: string;
    r_encryptionStr: string;
}
export declare const generateUserProof: (inputs: UserCircuitInputs) => Promise<string>;
export declare const generateUserCircuitWitness: (inputs: UserCircuitInputs) => Promise<void>;
export {};
