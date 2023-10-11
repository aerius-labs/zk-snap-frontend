import Dropdown from '@/components/DropDown';
import Image from 'next/image';
import Link from 'next/link';

function ProposalItem({proposal}:any) {
    return (
        <div className="w-full">
            <div className='flex md:px-20'>
                {proposal.logo ?
                <div className='mr-4 ml-3'>
                    <Image alt="Proposal Image" width={64} height={44} src={proposal.logo} />
                </div> : null}
                <div className='w-3/4'>
                    {/* Rendered only on mobile (width < 640px by default in Tailwind) */}
                    <h6 className='text-gray-200 leading-none mb-1 text-sm sm:hidden ml-4'>
                        {proposal.title.length > 30 ? `${proposal.title.slice(0, 40)}...` : proposal.title}
                    </h6>

                    {/* Rendered only on screens >= md size (width >= 768px by default in Tailwind) */}
                    <h6 className='text-gray-200 leading-none mb-1 text-lg hidden md:block'>
                        {proposal.title.length > 150 ? `${proposal.title.slice(0, 150)}...` : proposal.title}
                    </h6>
                    <p className='text-gray-200 text-sm leading-snug hidden md:block'>
                        {proposal.description.length > 150 ? `${proposal.description.slice(0, 150)}...` : proposal.description}
                    </p>

                    <div className='flex gap-2 ml-4 md:ml-0'>
                        <p className={`text-gray-200 border font-bold rounded-full flex items-center mt-2 px-2 text-xs ${proposal.endsIn!=='Ended'? 'bg-green-500 border-green-500 text-black':'bg-gray-600 text-gray-200 border-gray-600'}`}>
                            {
                                proposal.endsIn!=='Ended' ? 
                                    `Ends in ${proposal.endsIn}` : 'Ended'
                            }
                        </p>
                        {proposal.quorumReached!==undefined &&
                            <p
                                style={{ background: `linear-gradient(to right, #A55FFD ${proposal.quorumReached}%, transparent ${proposal.quorumReached}%, transparent 100%)`}}
                                className='text-gray-200 border border-gray-900 rounded-full flex items-center mt-2 px-2 text-xs'
                            >
                                {proposal.quorumReached}% quorum reached
                            </p>
                        }
                    </div>
                </div>
                {proposal.winningAmount ?
                    <div className='ml-auto text-gray-300 px-6 mr-6'>
                        <p className='text-sm md:text-xl'>{proposal.winningAmount}</p>
                        <p className='text-xs md:text-sm'>to {proposal.winnerCount} winners</p>
                    </div> : 
                    <div className='ml-auto mr-5 text-gray-500'>
                        <p className='text-xl'>NO REWARDS</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProposalItem;