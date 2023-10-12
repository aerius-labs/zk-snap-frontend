import ProposalItem from '@/components/Proposal';
import Image from 'next/image';
import Link from 'next/link';
import ProposalPageBar from '@/components/ProposalPageBar';
import Vote from '@/components/Vote';
export default function Proposal() {
    const proposalDetail = {
        communityName:'Aave by OxF92F...37B4',
        title:'ARBITRUMDAO SHORT-TERM STRATEGIC PRIORITIES (REDUCE FRICTION)',
        endsIn:'16 hours',
        quorumReached: 34.21,
        introduction: 'As we establish and nurture our DAO, we inevitably encounter various hurdles that could hinder our progress. We must recognize and swiftly work to eliminate the barriers obstructing our path to significant achievements. Please help us create a user-centric, frictionless experience for our community members, developers and critical stakeholders and pave the way to a bold future.',
        prompt: 'What immediate friction, pain points and barriers should ArbitrumDAO address/fund today to pave a clear path for long-term success?',
        whyNeedInput: 'As we continue to drive our DAO forward, we want to discuss something crucial - our vision, mission, and values. These aren\'t just fancy statements but the essence of our organization\'s success. We know that our success isn\'t just measured in numbers; it\'s measured in the positive impact we make and the legacy we leave behind. Our vision, mission, and values shape that legacy. These questions are the foundation of our DAO culture. They shape our behavior, decisions, and interactions. When our actions reflect our values, we build trust with our members, builders, end-users and partners. For instance, if we encounter an opportunity that doesn\'t align with our vision or compromises our values, we\'ll have the clarity to say \'no.\' Remember, keeping our Strategic Framework: Vision, Mission and Values alive becomes even more critical as we continue to grow. They help us stay true to our roots and maintain a consistent identity. It\'s not just about having these statements on a wall; it\'s about breathing life into them daily. The top 10 finishers of this contest in week 2 will be paid a reward directly in ARB! (This week we are accepting submissions and next week the community will vote on distributing 4,000 ARB to those submissions).'
    };
    return (
        <main
        className={`min-h-screen items-center justify-center px-24`}
        >
            <div className='flex flex-col md:flex-row gap-12 mt-12'>
                <div className='text-gray-200 w-full md:w-3/4'>
                    <ProposalPageBar />
                    <div className='flex items-center gap-3 text-lg'>
                        <Image src={'/community_logo.png'} alt='Community Logo' width={30} height={30} />
                        <p>{proposalDetail.communityName}</p>
                    </div>
                    <div className='pt-4 text-3xl'>{proposalDetail.title}</div>
                    <div className='flex gap-2 ml-4 md:ml-0'>
                        <p className={`text-gray-200 border font-bold rounded-full flex items-center mt-2 px-2 text-xs ${proposalDetail.endsIn!=='Ended'? 'bg-green-500 border-green-500 text-black':'bg-gray-600 text-gray-200 border-gray-600'}`}>
                            {
                                proposalDetail.endsIn!=='Ended' ? 
                                    `Ends in ${proposalDetail.endsIn}` : 'Ended'
                            }
                        </p>
                        {proposalDetail.quorumReached!==undefined &&
                            <p
                                style={{ background: `linear-gradient(to right, #A55FFD ${proposalDetail.quorumReached}%, transparent ${proposalDetail.quorumReached}%, transparent 100%)`}}
                                className='text-gray-200 border border-gray-900 rounded-full flex items-center mt-2 px-2 text-xs'
                            >
                                {proposalDetail.quorumReached}% quorum reached
                            </p>
                        }
                    </div>
                    <hr className='text-gray-300 mt-4' />
                    <div className='flex flex-col gap-3 pt-4'>
                        <p className='text-md'>Introduction</p>
                        <p className='text-sm leading-relaxed'>{proposalDetail.introduction}</p>
                    </div>
                    <hr className='text-gray-300 mt-4' />
                    <div className='flex flex-col gap-3 pt-4'>
                        <p className='text-md'>Prompt</p>
                        <p className='text-sm leading-relaxed'>{proposalDetail.prompt}</p>
                    </div>
                    <hr className='text-gray-300 mt-4' />
                    <div className='flex flex-col gap-3 pt-4'>
                        <p className='text-md'>Why we need your input</p>
                        <p className='text-sm leading-relaxed'>{proposalDetail.whyNeedInput}</p>
                    </div>
                </div>
                <div className='text-gray-200 w-full md:w-1/4'>
                    {/* <button className='text-lg w-full p-4 rounded-xl bg-green-500 flex justify-center items-center'>
                        VOTE
                    </button> */}
                    <Vote />
                </div>
            </div>
        </main>
    )
}















