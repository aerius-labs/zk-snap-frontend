import ProposalItem from '@/components/Proposal';
import Image from 'next/image';
import CommunityPageBar from '@/components/CommunityPageBar';
import Link from 'next/link';
export default function Community() {
    // community proposal list
    const list = [
        {
            communityId:'1',
            proposalId:'1',
            accountAddress: '0xF92F...3784',
            title:'Domain Allocator Election for the New Protocol Ideas Domain',
            description: 'Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......',
            endsIn: '16 hours',
            quorumReached: 34.21,
            winningAmount: '0.03 ETH',
            winnerCount: '5'
        },
        {
            communityId:'1',
            proposalId:'2',
            accountAddress: '0xF92F...3784',
            title:'Domain Allocator Election for the New Protocol Ideas Domain',
            description: 'Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......',
            endsIn: '16 hours',
            quorumReached: 87.56,
            winningAmount: '0.015 AVAX',
            winnerCount: '3'
        },
        {
            communityId:'1',
            proposalId:'3',
            accountAddress: '0xF92F...3784',
            title:'Domain Allocator Election for the New Protocol Ideas Domain',
            description: 'Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......',
            endsIn: 'Ended',
            quorumReached: undefined,
            winningAmount: '0.08 DOGE',
            winnerCount: '1'
        },
        {
            communityId:'1',
            proposalId:'4',
            accountAddress: '0xF92F...3784',
            title:'Domain Allocator Election for the New Protocol Ideas Domain',
            description: 'Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......',
            endsIn: 'Ended',
            quorumReached: 21.21,
            winningAmount: undefined,
            winnerCount: undefined
        }
    ];
  return (
    <main
      className={`min-h-screen items-center justify-center py-12`}
    >
        <div className='flex flex-col justify-center items-center'>
            <Image src={'/community_logo.png'} alt='Community Logo' width={100} height={100} />
            <div className='flex gap-1 items-center mt-2'>
                <p className='text-gray-200 text-lg font-good-times'>AAVEGOTCHI</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 23 24" fill="none">
                    <circle cx="11.6554" cy="13.0406" r="7.55431" fill="#DEDEDE"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.73111 2.33393C8.45503 2.56921 8.31698 2.68687 8.16954 2.78568C7.83158 3.0122 7.45202 3.16941 7.05288 3.24821C6.87875 3.2826 6.69795 3.29702 6.33635 3.32587C5.42782 3.39839 4.97355 3.43463 4.59456 3.5685C3.71797 3.87811 3.02847 4.56761 2.71886 5.4442C2.58499 5.82318 2.54875 6.27746 2.47623 7.18599C2.44738 7.54759 2.43296 7.72839 2.39857 7.90252C2.31977 8.30166 2.16256 8.68122 1.93604 9.01918C1.83723 9.16662 1.71958 9.30466 1.48429 9.58075C0.893134 10.2745 0.597542 10.6213 0.42422 10.9839C0.0233068 11.8228 0.0233068 12.7978 0.42422 13.6366C0.597553 13.9993 0.893134 14.3461 1.48429 15.0398C1.71955 15.3158 1.83723 15.4539 1.93604 15.6013C2.16256 15.9393 2.31977 16.3188 2.39857 16.718C2.43296 16.8922 2.44738 17.073 2.47623 17.4345C2.54875 18.3431 2.58499 18.7973 2.71886 19.1763C3.02847 20.0529 3.71797 20.7425 4.59456 21.0521C4.97355 21.1858 5.42782 21.2221 6.33635 21.2947C6.69795 21.3235 6.87875 21.338 7.05288 21.3723C7.45202 21.4511 7.83158 21.6084 8.16954 21.8349C8.31698 21.9336 8.45502 22.0513 8.73111 22.2866C9.42483 22.8778 9.77163 23.1734 10.1343 23.3467C10.9731 23.7476 11.9481 23.7476 12.787 23.3467C13.1496 23.1734 13.4964 22.8778 14.1901 22.2866C14.4662 22.0513 14.6043 21.9336 14.7517 21.8349C15.0896 21.6084 15.4692 21.4511 15.8684 21.3723C16.0425 21.338 16.2233 21.3235 16.5849 21.2947C17.4934 21.2221 17.9477 21.1858 18.3267 21.0521C19.2033 20.7425 19.8928 20.0529 20.2024 19.1763C20.3362 18.7973 20.3725 18.3431 20.445 17.4345C20.4738 17.073 20.4884 16.8922 20.5227 16.718C20.6015 16.3188 20.7587 15.9393 20.9853 15.6013C21.084 15.4539 21.2017 15.3158 21.4369 15.0398C22.0282 14.3461 22.3237 13.9993 22.4971 13.6366C22.8979 12.7978 22.8979 11.8228 22.4971 10.9839C22.3237 10.6213 22.0282 10.2745 21.4369 9.58075C21.2017 9.30466 21.084 9.16662 20.9853 9.01918C20.7587 8.68122 20.6015 8.30166 20.5227 7.90252C20.4884 7.72839 20.4738 7.54759 20.445 7.18599C20.3725 6.27746 20.3362 5.82318 20.2024 5.4442C19.8928 4.56761 19.2033 3.87811 18.3267 3.5685C17.9477 3.43463 17.4934 3.39839 16.5849 3.32587C16.2233 3.29702 16.0425 3.2826 15.8684 3.24821C15.4692 3.16941 15.0896 3.0122 14.7517 2.78568C14.6043 2.68687 14.4662 2.56922 14.1901 2.33393C13.4964 1.74277 13.1496 1.44719 12.787 1.27386C11.9481 0.872947 10.9731 0.872947 10.1343 1.27386C9.77163 1.44718 9.42483 1.74277 8.73111 2.33393ZM16.4189 9.88769C16.7792 9.52735 16.7792 8.94315 16.4189 8.58281C16.0586 8.22249 15.4743 8.22249 15.114 8.58281L9.61529 14.0816L7.80721 12.2735C7.44688 11.9132 6.86267 11.9132 6.50234 12.2735C6.14201 12.6338 6.14201 13.218 6.50234 13.5784L8.96282 16.0389C9.32313 16.3992 9.90733 16.3992 10.2677 16.0389L16.4189 9.88769Z" fill="url(#paint0_linear_188_4185)"/>
                    <defs>
                        <linearGradient id="paint0_linear_188_4185" x1="-2.64112" y1="10.3584" x2="19.2233" y2="26.6244" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DEDEDE"/>
                        <stop offset="0.451465" stopColor="#1638EF"/>
                        <stop offset="0.698748" stopColor="#A55FFD"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p className='text-gray-600 text-lg -ml-3 font-good-times'>837K MEMBERS</p>
        </div>
        <CommunityPageBar community_id={'725b3ff5-38ef-4329-8e27-3673be6d9252'}/>
        <div className='flex z-10 flex-wrap justify-center items-center'>
            {
                list.map((listItem, idx) => (
                    <div key={idx}>
                        <hr className='absolute mt-12 border-2 border-custom-purple w-full md:hidden'/>
                        <div className="relative w-full h-[20vh] md:w-[1040px] md:h-[199px] md:mb-16">
                            <svg className="absolute top-0 left-0 z-10 w-full h-full hidden md:block" viewBox="0 0 1100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.78516 65.5738V44.3895L31.8782 3.15088H1008.64L1036.61 44.3895V65.5738M2.78531 133.778V154.962L31.8784 196.201H1008.64L1036.61 154.962V133.778" stroke="#A55FFD" strokeWidth="5.31252"/>
                                <g filter="url(#filter0_b_62_467)">
                                <path d="M35.2678 10.7774L9.56445 48.0617V150.569L35.2678 188.983H1003.93L1029.64 150.569V48.0617L1003.93 10.7774H35.2678Z" stroke="#2B37E6" strokeWidth="1.32813"/>
                                </g>
                                <defs>
                                <filter className='w-full h-full' id="filter0_b_62_467" x="-0.272943" y="0.940009" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.58667"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_62_467"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_62_467" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            <Link href={`/proposal/${listItem.proposalId}`}>
                                <div className="p-4 md:p-0 relative z-20 mt-7 flex flex-col justify-center">
                                    <div className='flex gap-2 items-center font-good-times mb-1 text-sm md:text-lg text-gray-200 mx-4 md:mx-20 mt-8 md:mt-8'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 18 16" fill="none">
                                            <circle cx="8.979" cy="9.5" r="8.66406" fill="#D9D9D9"/>
                                        </svg>
                                        {listItem.accountAddress}
                                    </div>
                                    <ProposalItem proposal={listItem}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </main>
  )
}
