import React, { useState } from 'react';

const SearchBox = ({setItems, allItems}:{allItems:any, setItems:any}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Set the width to the desired value when focused
  const inputWidth = isFocused ? 'w-48' : 'w-0';
  
  const handleSearch = (searchValue: string) => {
    if(searchValue===null || searchValue===undefined || searchValue==''){
      setItems(allItems);
    }else{
      const lowercasedFilter = searchValue.toLowerCase();
      const filteredProposals = allItems.filter((item:any) => {
        let valueToSearch = item.title;
        if(valueToSearch===undefined) valueToSearch=item.name;
        return valueToSearch.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '').includes(lowercasedFilter);
      });
      setItems(filteredProposals);
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Conditionally render the SVG based on focus */}
      {!isFocused && (
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 35 35"
            fill="none"
            className="transition-opacity duration-500 ease-in-out"
          >
              <path
                d="M22.333 21.0579C23.425 19.8537 24.0903 18.2555 24.0903 16.5019C24.0903 12.7549 21.0527 9.71732 17.3056 9.71732C13.5586 9.71732 10.521 12.7549 10.521 16.5019C10.521 20.249 13.5586 23.2866 17.3056 23.2866C19.0592 23.2866 20.8519 22.4268 22.333 21.0579ZM22.333 21.0579L25.871 24.4624"
                stroke="#A55FFD"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect x="1.90186" y="1.06693" width="32" height="32" rx="16" stroke="#9455E4" strokeWidth="2"/>
          </svg>
        </div>
      )}
      <input
        className={`py-2 pl-4 pr-4 bg-black text-white rounded-full focus:outline-none focus:ring focus:border-blue-300 transition-all duration-500 ease-in-out ${inputWidth}`}
        placeholder="Search"
        type="search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e:any)=>handleSearch(e.target.value)}
        onKeyPress={(e:any) => {
          if (e.key === "Enter") {
            console.log(e.target.value)
            handleSearch(e.target.value)
            // Trigger search logic here
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
