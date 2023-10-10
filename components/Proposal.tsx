import Dropdown from '@/components/DropDown';
import Image from 'next/image';
import Link from 'next/link';

function ProposalItem({proposal}:any) {
    return (
        <div className="w-full">
            {/* {console.log(proposal)} */}
            <hr className='mb-6 border-2 border-custom-purple mx-20'/>
            <div className='flex px-20'>
                <div className='mr-4'>
                    <Image alt="Proposal Image" width={64} height={44} src={proposal.logo} />
                </div>
                <div className=''>
                    <h6 className='text-gray-200'>{proposal.title}</h6>
                    <p className='text-gray-200 text-sm'>{proposal.description}</p>
                    <div className='flex gap-2'>
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
            </div>
        </div>
    );
}

export default ProposalItem;