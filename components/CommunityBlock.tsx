import Image from 'next/image';
function CommunityBlock({community}: any) {
    return (
        <div className="relative w-64 h-64">
            <svg xmlns="http://www.w3.org/2000/svg" width="241" height="165" viewBox="0 0 241 165" fill="none">
                <path d="M3.28516 65.574V44.3898L32.3782 3.15112H209.479L237.442 44.3898V65.574" stroke="#A55FFD" stroke-width="5.31252"/>
                <path d="M3.28534 99.7782V120.962L32.3784 162.201H209.479L237.442 120.962V99.7782" stroke="#A55FFD" stroke-width="5.31252"/>
                <g filter="url(#filter0_b_496_65)">
                    <path d="M35.7677 10.7774L10.0644 48.0617V115.569L35.7677 153.983H206.089L231.793 115.569V48.0617L206.089 10.7774H35.7677Z" stroke="#2B37E6" stroke-width="1.32813"/>
                </g>
                <defs>
                    <filter id="filter0_b_496_65" x="0.226996" y="0.939994" width="241.403" height="162.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.58667"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_496_65"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_496_65" result="shape"/>
                    </filter>
                </defs>
            </svg>
        <div className="absolute left-1/2 -mb-12 -ml-1 items-center flex flex-col bottom-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src='/Logo.png' width={50} height={50} alt="Community Logo"/>
            <p className='text-gray-100'>{community?.name}</p>
            <p className='text-gray-700'>{community?.members}</p>
        </div>
        </div>
    );
}

export default CommunityBlock;
