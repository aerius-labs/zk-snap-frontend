import Dropdown from '@/components/DropDown';
import Link from 'next/link';
import SearchBox from './SearchBox';

function CommunityPageBar({community_id, allProposals, setProposals}: { allProposals:any,  community_id: string, setProposals:any }) {
    return (
        <div className="w-full">
            <div className='md:mt-0 mt-4 flex items-center justify-center mb-4 flex-row flex-wrap px-20 gap-4 md:justify-between'>
                
                <div className='flex gap-3 text-xs'>
                    <Link href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 25 32" fill="none">
                            <path d="M18.5829 4.88017L7.37498 16L18.5829 27.1198" stroke="#9455E4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link href={`/community/${community_id}/new-proposal`}>
                        <button className='text-gray-100 border-custom-purple border py-2 px-8 rounded-2xl font-good-times'>NEW PROPOSAL</button>
                    </Link>
                </div>
                
                {/* New Button in the middle */}
                <div className='flex mr-10 flex-initial'>
                    <button className='text-gray-100 text-xs border-custom-purple border px-4 py-1 rounded-2xl font-good-times'>
                        JOIN
                    </button>
                </div>

                <div className='flex gap-3 text-xs'>
                    <Dropdown/>
                    <SearchBox allItems={allProposals} setItems={setProposals}/>
                </div>
            </div>
            <hr className='mb-6 border-custom-purple mx-20'/>
        </div>
    );
}

export default CommunityPageBar;