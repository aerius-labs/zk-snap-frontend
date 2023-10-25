import { useState, useEffect } from 'react';

export default function RevealResult({ proposalId, endTime }: any) {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const endTimeInMilliseconds = new Date(endTime).getTime();
      if (currentTime < endTimeInMilliseconds) {
        const remainingTimeInSeconds = Math.floor((endTimeInMilliseconds - currentTime) / 1000);
        setCountdown(remainingTimeInSeconds);
      } else {
        setCountdown(null);
      }
    };
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`${process.env.FRONTENDURL}/api/getResult?proposalId=${proposalId}`);
    console.log(response.text());
  };
  const countdownData = formatCountdown(countdown);
  return (
    <div className="flex flex-col items-center mb-4">
      {countdown !== null ? (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <p className="border border-custom-purple rounded-md text-custom-purple p-1 tracking-widest">{countdownData.hours}</p>
                <span className="text-xs text-custom-purple uppercase tracking-wider mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center">
                <p className="border border-custom-purple rounded-md text-custom-purple p-1 tracking-widest">{countdownData.minutes}</p>
                <span className="text-xs text-custom-purple uppercase tracking-wider mt-1">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
                <p className="border border-custom-purple rounded-md text-custom-purple p-1 tracking-widest">{countdownData.remainingSeconds}</p>
                <span className="text-xs text-custom-purple uppercase tracking-wider mt-1">Seconds</span>
            </div>
        </div>
      ) : (
        <button onClick={handleClick} className={`text-lg w-full tracking-widest font-good-times p-4 rounded-xl bg-custom-purple flex justify-center items-center`}>
          REVEAL RESULT
        </button>
      )}
    </div>
  );
}

function formatCountdown(seconds: number): { hours: number, minutes: number, remainingSeconds: number } {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;  
    return { hours, minutes, remainingSeconds };
}