import Dropdown from '@/components/DropDown';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchBox from './SearchBox';

function HomePageBar({allItems, setItems}: any) {
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
                <SearchBox allItems={allItems} setItems={setItems}/>
                </div>
            </div>
            <hr className='mb-6 border-custom-purple mx-20'/>
        </div>
    );
}

export default HomePageBar;