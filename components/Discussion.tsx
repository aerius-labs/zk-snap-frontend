import Image from 'next/image';

function DiscussionItem({discussion}:any) {
    return (
        <div className="w-full">
            <hr className='text-gray-200 mb-6'/>
            <div className='flex mb-6'>
                {discussion.logo ?
                    <div className='mr-4 ml-3'>
                        <Image alt="Discussion Image" width={24} height={24} src={discussion.logo} />
                    </div> : null}
                <div className='w-full'>
                    {/* Rendered only on mobile (width < 640px by default in Tailwind) */}
                    <h6 className='text-gray-200 leading-none mb-1 text-sm sm:hidden ml-4'>
                        {discussion.title.length > 30 ? `${discussion.title.slice(0, 40)}...` : discussion.title}
                    </h6>
                    <p className='text-gray-200 leading-none mb-1 text-sm sm:hidden ml-4'>
                        {discussion.description.length > 30 ? `${discussion.description.slice(0, 40)}...` : discussion.description}
                    </p>

                    {/* Rendered only on screens >= md size (width >= 768px by default in Tailwind) */}
                    <h6 className='text-gray-200 leading-none mb-1 text-lg hidden md:block'>
                        {discussion.title.length > 150 ? `${discussion.title.slice(0, 150)}...` : discussion.title}
                    </h6>
                    <p className='text-gray-200 text-sm leading-snug hidden md:block'>
                        {discussion.description.length > 150 ? `${discussion.description.slice(0, 150)}...` : discussion.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DiscussionItem;
