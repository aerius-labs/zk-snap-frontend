import Image from "next/image";
import Dropdown from '@/components/DropDown';
import Link from 'next/link';

function CommunityPageBar() {
    return (
    <div className="w-full">
    <div className='md:mt-0 mt-4 flex items-center justify-center mb-4 flex-row flex-wrap px-20 gap-4 md:justify-between'>
        
        <div className='flex gap-3 text-xs'>
            <Link href='/'>
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 25 32" fill="none">
                    <path d="M18.5829 4.88017L7.37498 16L18.5829 27.1198" stroke="#9455E4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            <Link href='/new-proposal'>
                <button className='text-gray-100 border-custom-purple border py-2 px-8 ml-4 rounded-2xl'>NEW PROPOSAL</button>
            </Link>
        </div>
        
        {/* New Button in the middle */}
        <button className='text-gray-100 text-xs border-custom-purple border px-2 py-1 mr-10 rounded-2xl'>
            JOIN
        </button>

        <div className='flex gap-3 text-xs'>
            {/* <div> */}
                <Dropdown/> { /* category dropdown */ }
                {/* Search Icon on homebar */}
                <span className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M22.333 21.0579C23.425 19.8537 24.0903 18.2555 24.0903 16.5019C24.0903 12.7549 21.0527 9.71732 17.3056 9.71732C13.5586 9.71732 10.521 12.7549 10.521 16.5019C10.521 20.249 13.5586 23.2866 17.3056 23.2866C19.2991 23.2866 21.0918 22.4268 22.333 21.0579ZM22.333 21.0579L25.871 24.4624" stroke="#A55FFD" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="1.90186" y="1.06693" width="32" height="32" rx="16" stroke="#9455E4" strokeWidth="2"/>
                    </svg>
                </span>
            {/* </div> */}
        </div>
    </div>
    <hr className='mb-6 border-custom-purple mx-20'/>
</div>


    );
}

export default CommunityPageBar;