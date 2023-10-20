import { useState } from 'react';
export default function Vote() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const handleButtonClick = () => {
    setModalOpen(true);
  }
  const handleOptionClick = (value: string) => {
    setActiveButton(value);
  }
  const handleOutsideClick = (e:any) => {
    if (e.target.id === "modal") {
      setModalOpen(false);
    }
  }
  const handleVote = () => {
    console.log(activeButton)
    //Connect Wallet here is still not connected
    //Send Api Request Here
    setModalOpen(false);
  }
  return (
    <div className="flex flex-col items-center mb-4">
      <button onClick={handleButtonClick} className={`text-lg w-full tracking-widest p-4 rounded-xl bg-green-500 flex justify-center items-center`}>
        VOTE
      </button>
      {isModalOpen && (
        <div id="modal" onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black border border-custom-purple w-3/4 md:w-1/4 flex flex-col justify-center rounded-lg py-8 px-10 text-center">
            <p onClick={handleVote} className={`block cursor-pointer mb-4 p-2 border-b border-gray-200 text-lg tracking-wider ${activeButton!=='' ?'bg-green-500 rounded-lg border-b-0 text-gray-300': 'text-gray-500'}`}>VOTE</p>
            <button
                onClick={() => handleOptionClick('FOR')}
                className={`block mb-4 cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 'FOR' ? 'text-white bg-custom-purple' : ''}`}
            >
                FOR
            </button>

            <button
                onClick={() => handleOptionClick('AGAINST')}
                className={`block mb-4 cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 'AGAINST' ? 'text-white bg-custom-purple' : ''}`}
            >
                AGAINST
            </button>

            <button
                onClick={() => handleOptionClick('ABSTAIN')}
                className={`block mb-4 cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 'ABSTAIN' ? 'text-white bg-custom-purple' : ''}`}
            >
                ABSTAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
