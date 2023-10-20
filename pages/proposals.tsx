import React from 'react'
import ProposalItem from '@/components/Proposal';
import HomePageBar from '@/components/HomePageBar';
export default function Proposals({proposals}:any) {
  return (
    <main
      className={`min-h-screen items-center justify-center py-12`}
    >
      <HomePageBar />
      <div className='flex z-10 gap-8 flex-wrap justify-center items-center'>
        {
          proposals.map((listItem:any, idx:any) => (
            <React.Fragment key={idx}>
              <hr className='border-2 border-custom-purple w-full mx-20'/>
              <ProposalItem proposal={listItem}/>
            </React.Fragment>
          ))
        }
      </div>
    </main>
  )
}
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3001/api/getAllProposals');
  const proposals = await response.json();
  return {
    props: {
      proposals
    }
  };
}