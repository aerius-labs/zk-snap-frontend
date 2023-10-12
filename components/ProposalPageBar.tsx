import Image from "next/image";
import Dropdown from '@/components/DropDown';
import Link from 'next/link';

function ProposalPageBar() {
    return (
    <div className="w-full mt-4">
    <div className='flex items-center mb-4 flex-row flex-wrap gap-4 justify-between'>
        <div className='flex gap-3 text-xs'>
            <Link href='/'>
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 0 25 32" fill="none">
                    <path d="M18.5829 4.88017L7.37498 16L18.5829 27.1198" stroke="#9455E4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        </div>
        <div className='flex gap-4 text-xs'>
            <Link href={`/proposal/1`}>
                <button className="text-gray-400 border border-custom-purple rounded-full px-1">INFO</button>
            </Link>
            <Link href={`/discussion/1`}>
                <button className="text-gray-400 border border-custom-purple rounded-full px-1">DISCUSSIONS</button>
            </Link>
        </div>
    </div>
    <hr className='mb-6 border-custom-purple'/>
</div>


    );
}

export default ProposalPageBar;