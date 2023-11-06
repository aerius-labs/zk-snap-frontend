export interface Community {
    id: string,
    logo: string,
    membersCount: number,
    name: string
}

export interface DaoProposal {
    creator: string;
    description: string;
    end_time: string;
    id: string;
    title: string;
}

export interface Dao {
    daoLogo: string;
    daoMemberCount: number;
    daoName: string;
    daoProposals: DaoProposal[];
}