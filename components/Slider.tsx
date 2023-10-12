import { useState } from 'react';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <div className="">
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          className={`px-4 py-1 rounded-full ${activeSlide === 1 ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSlide(1)}
        >
          
        </button>
        <button 
          className={`px-4 py-1 rounded-full ${activeSlide === 2 ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveSlide(2)}
        >
          
        </button>
      </div>

      <div>
        {activeSlide === 1 && <Slide1 />}
        {activeSlide === 2 && <Slide2 />}
      </div>
    </div>
  );
}


export function Slide1() {
    return (
      <div className="flex flex-col items-center space-y-4">
        {/* BASIC INFO */}
        <div className="h-32 px-4 py-2 w-full border border-custom-purple rounded-md">
            <div className='text-sm tracking-wider border-b border-custom-purple py-4'>
              <p>BASIC INFO</p>
            </div>
            <ShowInfo property={'IPFS'} value={'#hetkyiv'}/>
            <ShowInfo property={'Voting system'} value={'Single choice voting'}/>
        </div>

        {/* TIMELINE DETAILS */}
        <div className="h-40 px-4 w-full border border-custom-purple rounded-md">
            <div className='text-sm tracking-wider border-b border-custom-purple py-4'>
              <p>TIMELINE</p>
            </div>
            <ShowInfo property={'Submissions open:'} value={'Sep 17, 2023, 1:05 AM'}/>
            <ShowInfo property={'Submissions close/voting opens:'} value={'Sep 20, 2023, 1:05 AM'}/>
            <ShowInfo property={'Voting closes:'} value={'Sep 22, 2023, 1:05 AM'}/>
        </div>

        {/* RESULTS */}
        <div className="h-24 px-4 w-full border border-custom-purple rounded-md">
            <div className='text-sm tracking-wider border-b border-custom-purple py-4'>
              <p>RESULTS</p>
            </div>
            <ShowInfo property={'To be declared on:'} value={'Sep 25, 2023, 1:05 AM'}/>
        </div>
      </div>
    );
}

export function Slide2() {
    return (
      <div className="flex flex-col items-center space-y-4">
        {/* REWARDS */}
        <div className="h-32 px-4 py-2 w-full border border-custom-purple rounded-md">
            <div className='text-sm tracking-wider border-b border-custom-purple py-4'>
              <p>REWARDS</p>
            </div>
            <ShowInfo property={'1st place'} value={'80% of rewards'}/>
            <ShowInfo property={'2nd place'} value={'20% of rewards'}/>
        </div>

        {/* SUBMISSIONS */}
        <div className="h-40 px-4 w-full border border-custom-purple rounded-md">
            <div className='text-sm tracking-wider border-b border-custom-purple py-4'>
              <p>SUBMISSIONS</p>
            </div>
            <div className='flex flex-col gap-3 text-xs mt-2'>
              <p>Qualified wallets can enter a max of 1 submission</p>
              <p>Contest accept up to 4997 submissions</p>
              <p>Connect wallet to see if you qualift</p>
            </div>
        </div>

        {/* VOTING */}
        <div className="h-32 px-4 w-full border border-custom-purple rounded-md">
            <div className='text-sm tracking-wider border-b border-custom-purple py-4'>
              <p>VOTING</p>
            </div>
            <ul className='flex flex-col gap-3 text-xs mt-2'>
              <li>Connect wallet to see if you qualift</li>
              <li>See full allow list here</li>
            </ul>
        </div>
      </div>
    );
}

export function ShowInfo(props:any) {
  return (
    <div className='text-xs flex justify-between mt-2 tracking-wider'>
      <p className='text-gray-400'>{props?.property}</p>
      <p>{props?.value}</p>
    </div>
  )
}