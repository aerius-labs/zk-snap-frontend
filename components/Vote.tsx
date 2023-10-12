import { useState } from 'react';
export default function Vote() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(true);
  }
  const handleOptionClick = () => {
    setModalOpen(false);

  }
  const handleOutsideClick = (e:any) => {
    if (e.target.id === "modal") {
      setModalOpen(false);
    }
  }
  return (
    <div className="flex flex-col items-center min-h-screen">
      <button onClick={handleButtonClick} className='text-lg w-full tracking-widest p-4 rounded-xl bg-green-500 flex justify-center items-center'>
        VOTE
      </button>
      {isModalOpen && (
        <div id="modal" onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black border border-custom-purple w-1/4 flex flex-col justify-center rounded-lg py-8 px-10 text-center">
            <p className="block mb-4 p-2 text-gray-500 border-b border-gray-200 text-3xl tracking-wider">VOTE</p>
            <button onClick={handleOptionClick} className="block mb-4 cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md">FOR</button>
            <button onClick={handleOptionClick} className="block mb-4 cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md">AGAINST</button>
            <button onClick={handleOptionClick} className="block p-2 cursor-pointer border-b border-custom-purple text-gray-500 rounded-md">ABSTAIN</button>
          </div>
        </div>
      )}
    </div>
  );
}
