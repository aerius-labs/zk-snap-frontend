import React from 'react'
import ProposalPageBar from '@/components/ProposalPageBar';
// import Vote from '@/components/Vote';
import Slider from '@/components/Slider';
import DiscussionItem from '@/components/Discussion';
import { GetServerSideProps } from 'next';
import RevealResult from '@/components/RevealResult';
import dynamic from 'next/dynamic';

const Vote = dynamic(() => import('../../components/Vote'), {
  loading: () => <p className='mt-4'>Loading...</p>,
  ssr: false
});

export default function Discussions({id, proposalDetails}:any) {
  const discussions = [
    {
      logo: '/Logo.png',
      title:'Profile Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    },
    {
        logo: '/Logo.png',
        title:'Profile Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
        logo: '/Logo.png',
        title:'Profile Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    }
  ];
  return (
        <main
        className={`min-h-screen items-center justify-center px-24`}
        >
            <div className='flex flex-col md:flex-row gap-12 mt-12'>
                <div className='text-gray-200 w-full md:w-3/4'>
                    <ProposalPageBar id={id} />
                    {
                        discussions.map((discussion, idx)=>(
                            <React.Fragment key={idx}>
                                <DiscussionItem discussion={discussion}/>
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className='text-gray-200 w-full md:w-1/4'>
                    <Vote daoId={proposalDetails.daoId} proposalId={proposalDetails.proposalID} membersRoot={proposalDetails.membersRoot} encryptionKeys={proposalDetails.encryptionKeys} startTime={proposalDetails.start_time} endTime = {proposalDetails.end_time}/>
                    <RevealResult proposalId={proposalDetails.proposalID} endTime = {proposalDetails.end_time}/>
                    <Slider startTime = {proposalDetails.start_time} endTime = {proposalDetails.end_time}/>
                </div>
            </div>
        </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    const response = await fetch(`${process.env.FRONTENDURL}/api/getSpecificProposal?id=${id}`);
    const proposalDetails = await response.json();
    if (!id) {
        return {
          notFound: true
        };
    }
    return {
      props: {
        id,
        proposalDetails
      }
    };
};