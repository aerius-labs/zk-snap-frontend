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
        <div className="h-24 w-24">
            
        </div>
        <div className="h-24 w-24">

        </div>
        <div className="h-24 w-24">

        </div>
      </div>
    );
}

export function Slide2() {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="h-24 w-24">

        </div>
        <div className="h-24 w-24">

        </div>
        <div className="h-24 w-24">

        </div>
      </div>
    );
}  