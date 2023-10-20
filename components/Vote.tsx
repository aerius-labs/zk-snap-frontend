import { useState, useEffect, useRef } from 'react';
import ProofGenerator from './ProofGenerator';

export default function Vote() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [worker, setWorker] = useState(null);
  const [accountAddress, setAccountAddress] = useState('');
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
  const workerInstance = useRef<Worker | null>(null);
  useEffect(() => {
    import('./proof.worker.js').then((WorkerModule:any) => {
      workerInstance.current = new WorkerModule.default() as Worker;
      console.log("Worker loaded:", workerInstance);
      workerInstance.current.onmessage = (event:any) => {
        console.log('Getting the Result from Worker', event.data);
      };
      workerInstance.current.onerror = (error: any) => {
        console.error("Worker error:", error);
      };
    });
    const storedWalletAddress = sessionStorage.getItem('walletAddress');
    if (storedWalletAddress) {
      setAccountAddress(storedWalletAddress);
    }
  }, []);
  const handleVote = () => {
    console.log(activeButton)
    //Connect Wallet here is still not connected
    //Send Api Request Here
    setModalOpen(false);
  }
  return (
    <div className="flex flex-col items-center mb-4">
      <button onClick={handleButtonClick} className={`text-lg w-full tracking-widest font-good-times p-4 rounded-xl bg-green-500 flex justify-center items-center`}>
        VOTE
      </button>
      {isModalOpen && (
        <div id="modal" onClick={handleOutsideClick} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black border border-custom-purple w-3/4 md:w-1/4 flex flex-col justify-center rounded-lg py-8 px-10 text-center">
            <ProofGenerator workerInstance={workerInstance} setWorker={setWorker} handleVote={handleVote} />
            <button
                onClick={() => handleOptionClick('FOR')}
                className={`block mb-4 font-good-times cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 'FOR' ? 'text-white bg-custom-purple' : ''}`}
            >
                FOR
            </button>

            <button
                onClick={() => handleOptionClick('AGAINST')}
                className={`block mb-4 font-good-times cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 'AGAINST' ? 'text-white bg-custom-purple' : ''}`}
            >
                AGAINST
            </button>

            <button
                onClick={() => handleOptionClick('ABSTAIN')}
                className={`block mb-4 font-good-times cursor-pointer p-2 border-b border-custom-purple text-gray-500 rounded-md ${activeButton === 'ABSTAIN' ? 'text-white bg-custom-purple' : ''}`}
            >
                ABSTAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
