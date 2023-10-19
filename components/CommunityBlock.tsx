import Image from 'next/image';

function CommunityBlock({community}: any) {
    return (
        <div className="relative hover:cursor-pointer group">
            <div className="group-hover:blur-[2px] transition duration-300 ease-in-out flex items-center justify-center">
                {/* svg image of community border */}
                <svg xmlns="http://www.w3.org/2000/svg" width="241" height="165" viewBox="0 0 241 165" fill="none">
                    <path d="M3.28516 65.574V44.3898L32.3782 3.15112H209.479L237.442 44.3898V65.574" stroke="#A55FFD" strokeWidth="5.31252"/>
                    <path d="M3.28534 99.7782V120.962L32.3784 162.201H209.479L237.442 120.962V99.7782" stroke="#A55FFD" strokeWidth="5.31252"/>
                    <g filter="url(#filter0_b_496_65)">
                        <path d="M35.7677 10.7774L10.0644 48.0617V115.569L35.7677 153.983H206.089L231.793 115.569V48.0617L206.089 10.7774H35.7677Z" stroke="#2B37E6" strokeWidth="1.32813"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_496_65" x="0.226996" y="0.939994" width="241.403" height="162.88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.58667"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_496_65"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_496_65" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                {/* Community Logo */}
                <Image className="absolute w-12 h-12 -mt-14" width={50} height={50} src='/Logo.png' alt="Community Logo"/>

                {/* Community name and members count */}
                <div className="absolute flex-wrap mt-8 flex flex-col items-center">
                    <p className='text-gray-100 mt-1 font-good-times'>{community?.name}</p>
                    <p className='text-gray-700 text-xs font-good-times'>{community?.membersCount} members</p>
                </div>
            </div>
            
            {/* Rectangular box initially hidden */}
            <div className="text-gray-200 flex justify-center items-center absolute top-1/2 left-1/2 transform w-full h-1/4 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out tracking-widest p-4 bg-gray-800 border-2 border-gray-200 font-serif">
                VIEW
            </div>
        </div>
    );
}

export default CommunityBlock;
