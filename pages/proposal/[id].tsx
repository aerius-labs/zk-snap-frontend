import Image from 'next/image';
import ProposalPageBar from '@/components/ProposalPageBar';
import Vote from '@/components/Vote';
import Slider from '@/components/Slider';
import { GetServerSideProps } from 'next';
import { getTimeDifference } from '@/utils/helperFunctions';
export default function Proposal({id, proposalDetails}:any) {
    const proposalDetail = {
        communityName:'Aave',
    };
    return (
        <main
        className={`min-h-screen items-center justify-center px-24`}
        >
            <div className='flex flex-col md:flex-row gap-12 mt-12'>
                <div className='text-gray-200 w-full md:w-3/4'>
                    <ProposalPageBar id={id} />
                    <div className='flex items-center gap-3 text-lg'>
                        <Image src={'/community_logo.png'} alt='Community Logo' width={30} height={30} />
                        <p className='font-good-times'>{proposalDetail.communityName} by {proposalDetails.creator.slice(0,5) + '...' + proposalDetails.creator.slice(-5)}</p>
                    </div>
                    <div className='pt-4 text-3xl font-good-times'>{proposalDetails.title}</div>
                    <div className='flex gap-2 flex-col md:flex-row md:ml-0'>
                        <p className={`text-gray-200 border font-bold rounded-full flex items-center mt-2 px-2 text-xs ${getTimeDifference(proposalDetails.end_time)!=='Ended'? 'bg-green-500 border-green-500 text-black':'bg-gray-600 text-gray-200 border-gray-600'}`}>
                            {
                                `${getTimeDifference(proposalDetails.end_time)}`
                            }
                        </p>
                        {proposalDetails.quorumReached!==undefined &&
                            <p
                                style={{ background: `linear-gradient(to right, #A55FFD ${proposalDetails.quorumReached}%, transparent ${proposalDetails.quorumReached}%, transparent 100%)`}}
                                className='text-gray-200 border border-gray-600 rounded-full flex items-center mt-2 px-2 text-xs'
                            >
                                {proposalDetails.quorumReached}% quorum reached
                            </p>
                        }
                    </div>
                    <hr className='text-gray-300 mt-4' />
                    <div className='flex flex-col gap-3 pt-4'>
                        <p className='text-md'>Description</p>
                        <p className='text-sm leading-relaxed'>{proposalDetails.description}</p>
                    </div>
                </div>
                <div className='text-gray-200 w-full md:w-1/4'>
                    <Vote />
                    <Slider/>
                </div>
            </div>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    const response = await fetch(`http://localhost:3001/api/getSpecificProposal?id=${id}`);
    const proposalDetails = await response.json();
    // You can now use the id for fetching data or any other server-side operations
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