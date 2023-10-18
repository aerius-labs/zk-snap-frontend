interface UserCircuitInputs {
    nullifierStr: string;
    encryptionPublicKeyStr: string;
    membersRootStr: string;
    userPublicKeyStr: string;
    proposalIdStr: string;
    encryptedVoteStr: string;
    userSignatureStr: string;
    voteStr: string;
    voteWeightStr: string;
    userBalanceStr: string;
    memberProofStr: string;
}
export declare const generateUserProof: (inputs: UserCircuitInputs) => Promise<string>;
export {};
