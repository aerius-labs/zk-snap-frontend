import Image from "next/image";
function Header() {
    return (
        <div className="w-full sticky top-0">
            <section className="flex justify-center items-center p-4">
                {/* zk-snap logo of header */}
                <svg className="flex-grow ml-24 text-center" xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 56" fill="none">
                    <g clipPath="url(#clip0_496_665)">
                        <path d="M26.2672 0.96405C31.2323 1.03023 36.0719 2.78901 40.3365 6.15172C41.3429 6.94529 41.4429 8.22178 40.5898 9.03498C39.9217 9.6718 38.9169 9.70632 38.1265 9.08818C36.8946 8.12519 35.601 7.25721 34.1795 6.6036C27.7511 3.64687 21.4624 3.97019 15.4438 7.66127C10.3189 10.8045 7.19397 15.4988 5.55204 21.2232C4.88165 23.5606 4.5881 25.9543 4.61248 28.3853C4.61787 28.9281 4.50324 29.4269 4.1245 29.8331C3.6229 30.3715 3.00254 30.5577 2.29384 30.3674C1.59463 30.1796 1.16966 29.7024 0.995497 29.0057C0.954317 28.8329 0.933696 28.6558 0.934063 28.4781C0.910947 21.7625 2.81127 15.672 6.98022 10.3723C10.6181 5.74891 15.3032 2.70889 21.0894 1.45362C22.6373 1.11637 24.207 0.9688 26.2672 0.96405Z" fill="url(#paint0_linear_496_665)"/>
                        <path d="M25.7366 55.0257C20.4413 54.9836 15.6618 53.379 11.3754 50.2788C10.6746 49.7722 10.3012 49.122 10.4801 48.2458C10.7408 46.9696 12.1978 46.4189 13.333 47.1514C14.1779 47.6961 14.9962 48.2889 15.8736 48.7753C22.6545 52.5322 30.8815 52.151 37.2804 47.7721C42.1052 44.4702 45.1316 39.9019 46.6241 34.2858C47.1564 32.2841 47.398 30.2407 47.4037 28.1684C47.4059 27.2282 47.8344 26.5622 48.5947 26.2703C49.7914 25.8105 51.071 26.6712 51.0647 27.9958C51.06 29.1675 51.0074 30.3452 50.8747 31.5083C50.4314 35.359 49.2499 38.9782 47.2713 42.3149C43.9413 47.9314 39.228 51.8701 32.9896 53.9031C30.6364 54.6694 28.2145 55.0352 25.7366 55.0257Z" fill="url(#paint1_linear_496_665)"/>
                        <path d="M41.1782 29.8011H33.5199C33.5832 29.8854 33.6254 29.9462 33.6719 30.0032C34.3328 30.8094 34.2897 31.8978 33.5696 32.571C32.8495 33.2443 31.7504 33.236 31.0018 32.5115C30.2418 31.7778 29.5134 31.013 28.7743 30.2603C27.8876 29.36 26.9981 28.4648 26.1228 27.5547C25.587 26.998 25.4018 26.3311 25.6678 25.5914C26.101 24.3861 27.5713 23.9966 28.5634 24.8313C28.9621 25.1664 29.3016 25.5711 29.6851 25.9258C29.788 26.0208 29.9533 26.0993 30.0898 26.0996C34.2533 26.1087 38.4169 26.1107 42.5804 26.1056C42.7086 26.1046 42.8364 26.094 42.963 26.074C44.2433 25.8802 45.2392 26.7542 45.161 28.0493C45.0707 29.551 44.7886 31.026 44.355 32.4637C42.3128 39.2404 38.0442 44.1602 31.8112 47.4279C31.4796 47.6014 31.1427 47.7683 30.7959 47.9083C29.8035 48.3085 28.7816 47.9364 28.3576 47.0352C27.9266 46.1197 28.2889 45.063 29.2576 44.5874C30.6154 43.9223 31.9397 43.2029 33.1526 42.2978C37.299 39.2068 40.0243 35.1801 41.1516 30.1061C41.1665 30.039 41.1789 29.9709 41.1877 29.9025C41.1883 29.8685 41.1851 29.8345 41.1782 29.8011Z" fill="url(#paint2_linear_496_665)"/>
                        <path d="M10.6538 26.865H18.1665C18.0962 26.7773 18.0528 26.7171 18.0034 26.6627C17.2538 25.8374 17.2434 24.7244 17.9822 24.0058C18.721 23.2873 19.8439 23.3123 20.6343 24.1008C22.1001 25.5648 23.5445 27.0497 24.997 28.5266C25.2253 28.7587 25.4597 28.9858 25.6728 29.2312C26.3315 29.9896 26.3109 31.0739 25.6348 31.7553C24.9381 32.4558 23.8614 32.4922 23.0935 31.8165C22.7243 31.4912 22.3839 31.1318 22.0463 30.7715C21.8987 30.6131 21.7483 30.5498 21.5317 30.5517C17.4076 30.5578 13.2837 30.5578 9.15979 30.5517C8.86719 30.5517 8.56255 30.5324 8.28452 30.4504C7.42539 30.197 6.93076 29.4174 6.92284 28.3512C6.89909 24.3485 7.8282 20.5858 9.85013 17.124C12.2065 13.0903 15.5296 10.1734 19.9519 8.56728C20.4585 8.38298 20.9693 8.31395 21.4817 8.52168C22.1752 8.80447 22.5755 9.33172 22.6315 10.0734C22.6885 10.828 22.3684 11.4246 21.7078 11.7979C21.3933 11.9759 21.0371 12.0804 20.6995 12.2172C17.333 13.5811 14.8114 15.9054 13.001 19.0256C11.6216 21.4006 10.8755 23.9786 10.6513 26.7114C10.651 26.7523 10.6538 26.7916 10.6538 26.865Z" fill="url(#paint3_linear_496_665)"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_496_665" x1="-1.38618" y1="18.2874" x2="45.5884" y2="57.9512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DEDEDE"/>
                        <stop offset="0.416667" stopColor="#1638EF"/>
                        <stop offset="0.90625" stopColor="#A55FFD"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_496_665" x1="-1.38618" y1="18.2874" x2="45.5884" y2="57.9512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DEDEDE"/>
                        <stop offset="0.416667" stopColor="#1638EF"/>
                        <stop offset="0.90625" stopColor="#A55FFD"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_496_665" x1="-1.38618" y1="18.2874" x2="45.5884" y2="57.9512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DEDEDE"/>
                        <stop offset="0.416667" stopColor="#1638EF"/>
                        <stop offset="0.90625" stopColor="#A55FFD"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_496_665" x1="-1.38618" y1="18.2874" x2="45.5884" y2="57.9512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DEDEDE"/>
                        <stop offset="0.416667" stopColor="#1638EF"/>
                        <stop offset="0.90625" stopColor="#A55FFD"/>
                        </linearGradient>
                        <clipPath id="clip0_496_665">
                        <rect width="50.1309" height="54.0617" fill="white" transform="translate(0.93457 0.96405)"/>
                        </clipPath>
                    </defs>
                </svg>
                {/* Connect Wallet Functionality in header */}
                <button className="ml-auto text-xs font-good-times text-gray-200 border p-2 rounded-3xl border-custom-purple" style={{fontFamily:'sans-serif'}}>CONNECT WALLET</button>
            </section>
            <hr className="border-t border-custom-purple m-0" />
        </div>
    );
}

export default Header;