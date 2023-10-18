import { useState, useRef, useEffect } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false); // to toggle dropdown
    const [selectedOption, setSelectedOption] = useState('CATEGORY'); // show the selected option
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    
    const dropDownList = [
        {
            name:'ALL',
            count:'29.5K',
            value:'ALL'
        },
        {
            name:'INVESTMENTS',
            count:'7023',
            value:'INVESTMENTS'
        },
        {
            name:'PROTOCOL',
            count:'3654',
            value:'PROTOCOL'
        },
        {
            name:'SOCIAL',
            count:'2563',
            value:'SOCIAL'
        },
        {
            name:'SERVICES',
            count:'506',
            value:'SERVICES'
        },
        {
            name:'COLLECTORS',
            count:'384',
            value:'COLLECTORS'
        }
    ];
    
    // Close dropdown when clicking outside
    useEffect(() => {
        function handleDocumentClick(event: any){
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    // handler for fetching communities and proposals according to selected category
    const handleOptionClick = async (value: any) => {
        setSelectedOption(value);
        setIsOpen(false);
        // TODO: Handle the filter dao api here
        // // Call your API with the new value
        // try {
        //     const response = await fetch(`/api/yourApiEndpoint?value=${value}`);
        //     // Handle the response as needed
        // } catch (err) {
        //     console.error('Error fetching data:', err);
        // }
    };

    return (
        <div ref={dropdownRef} className="w-36 relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 w-36 border border-custom-purple py-2 px-4 rounded-2xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                    <path d="M6.2616 10.2497L6.2616 2.74647C6.2616 2.15448 5.78169 1.67458 5.1897 1.67458L3.58186 1.67458C2.98987 1.67458 2.50997 2.15448 2.50997 2.74647L2.50997 10.2497C2.50997 10.8417 2.98987 11.3216 3.58186 11.3216H5.1897C5.78169 11.3216 6.2616 10.8417 6.2616 10.2497Z" stroke="#DEDEDE" strokeWidth="1.07189"/>
                    <path d="M11.8889 5.42621V2.74647C11.8889 2.15448 11.409 1.67458 10.817 1.67458L9.20912 1.67458C8.61714 1.67458 8.13722 2.15448 8.13722 2.74647V5.42621" stroke="#DEDEDE" strokeWidth="1.07189" strokeLinecap="round"/>
                    <path d="M7.86922 9.17804C7.86922 10.362 8.82903 11.3218 10.013 11.3218C11.197 11.3218 12.1568 10.362 12.1568 9.17804C12.1568 7.99406 11.197 7.03426 10.013 7.03426C8.82903 7.03426 7.86922 7.99406 7.86922 9.17804Z" fill="#A55FFD" stroke="#DEDEDE" strokeWidth="1.07189"/>
                    <path d="M9.20918 9.17793C9.20918 9.62192 9.5691 9.98185 10.0131 9.98185C10.4571 9.98185 10.817 9.62192 10.817 9.17793C10.817 8.73394 10.4571 8.37401 10.0131 8.37401C9.5691 8.37401 9.20918 8.73394 9.20918 9.17793Z" fill="#1638EF"/>
                </svg>
                <p className="ml-1 font-good-times">{selectedOption}</p>
            </button>
            {/* dropdown list */}
            {isOpen && (
                <div className="absolute z-30 mt-2 bg-black w-full border border-custom-purple rounded-md shadow-lg">
                    <ul>
                        <li>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 rounded-2xl flex items-center my-2 ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M6.2616 10.2497L6.2616 2.74647C6.2616 2.15448 5.78169 1.67458 5.1897 1.67458L3.58186 1.67458C2.98987 1.67458 2.50997 2.15448 2.50997 2.74647L2.50997 10.2497C2.50997 10.8417 2.98987 11.3216 3.58186 11.3216H5.1897C5.78169 11.3216 6.2616 10.8417 6.2616 10.2497Z" stroke="#DEDEDE" strokeWidth="1.07189"/>
                                    <path d="M11.8889 5.42621V2.74647C11.8889 2.15448 11.409 1.67458 10.817 1.67458L9.20912 1.67458C8.61714 1.67458 8.13722 2.15448 8.13722 2.74647V5.42621" stroke="#DEDEDE" strokeWidth="1.07189" strokeLinecap="round"/>
                                    <path d="M7.86922 9.17804C7.86922 10.362 8.82903 11.3218 10.013 11.3218C11.197 11.3218 12.1568 10.362 12.1568 9.17804C12.1568 7.99406 11.197 7.03426 10.013 7.03426C8.82903 7.03426 7.86922 7.99406 7.86922 9.17804Z" fill="#A55FFD" stroke="#DEDEDE" strokeWidth="1.07189"/>
                                    <path d="M9.20918 9.17793C9.20918 9.62192 9.5691 9.98185 10.0131 9.98185C10.4571 9.98185 10.817 9.62192 10.817 9.17793C10.817 8.73394 10.4571 8.37401 10.0131 8.37401C9.5691 8.37401 9.20918 8.73394 9.20918 9.17793Z" fill="#1638EF"/>
                                </svg>
                                <p className="ml-1">CATEGORY</p>
                            </button>
                            <hr className='border border-custom-purple'/>
                        </li>
                        {dropDownList.map((item)=>(
                            <li 
                                key={item.name}
                                className="cursor-pointer text-gray-100 hover:bg-gray-900 px-4 py-2"
                                onClick={() => handleOptionClick(item.value)}
                            >
                                <span>{item.name}</span>
                                <span className='border border-custom-purple rounded-full px-1'>{item.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
