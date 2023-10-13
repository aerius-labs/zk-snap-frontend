import Image from "next/image";
import Dropdown from '@/components/DropDown';
import Link from 'next/link';
import { useRouter } from 'next/router';

function HomePageBar() {
    const router = useRouter();
    return (
        <div className="w-full">
            <div className='flex mb-4 flex-row flex-wrap px-20 gap-4'>
                <div className='flex gap-3 text-xs'>
                <Link href='/'>
                    <button className={`${router.pathname === '/' ? 'bg-custom-purple' : ''} text-gray-100 border font-good-times border-custom-purple py-2 px-4 rounded-2xl`}>COMMUNITIES 29.5K</button>
                </Link>
                <Link href='/proposals'>
                    <button className={`text-gray-100 border border-custom-purple py-2 px-4 font-good-times rounded-2xl ${router.pathname === '/proposals' ? 'bg-custom-purple' : ''}`}>PROPOSALS 119.5K</button>
                </Link>
                </div>
                <div className='ml-auto flex gap-3 text-xs'>
                <Dropdown/> { /* category dropdown */ }
                
                {/* Search Icon on homebar */}
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path d="M22.333 21.0579C23.425 19.8537 24.0903 18.2555 24.0903 16.5019C24.0903 12.7549 21.0527 9.71732 17.3056 9.71732C13.5586 9.71732 10.521 12.7549 10.521 16.5019C10.521 20.249 13.5586 23.2866 17.3056 23.2866C19.2991 23.2866 21.0918 22.4268 22.333 21.0579ZM22.333 21.0579L25.871 24.4624" stroke="#A55FFD" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="1.90186" y="1.06693" width="32" height="32" rx="16" stroke="#9455E4" strokeWidth="2"/>
                    </svg>
                </span>
                </div>
            </div>
            <hr className='mb-6 border-custom-purple mx-20'/>
        </div>
    );
}

export default HomePageBar;
