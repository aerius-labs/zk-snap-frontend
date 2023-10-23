// pages/proposal.js
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export default function Proposal({id}:any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [accountAddress, setAccountAddress] = useState('');
  const router = useRouter();
  function combineDateTime(date, time) {
    const timeDate = new Date(time);
    date.setHours(timeDate.getHours());
    date.setMinutes(timeDate.getMinutes());
    date.setSeconds(timeDate.getSeconds());
    date.setMilliseconds(timeDate.getMilliseconds());
    // Convert to the desired format
    return date.toISOString();
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let accountValue='';
    if(window.mina){
      const accounts = await window.mina.getAccounts();
      if(accounts.length == 0){
        const data = await window.mina.requestAccounts().catch(err => err);
        if (!data.message && Array.isArray(data) && data.length > 0) {
          sessionStorage.setItem('walletAddress', data[0]);
          accountValue = data[0];
          setAccountAddress(data[0]);
        }else{
          alert('Please connect first');
          return;
        }
      }else{
        accountValue = sessionStorage.getItem('walletAddress');
        setAccountAddress(accountValue)
      }
    }
    const start_time = combineDateTime(startDate, startTime);
    const end_time = combineDateTime(endDate, endTime);
    // Handle form submission logic here
    const response = await fetch(`${process.env.FRONTENDURL}/api/postProposal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: description,
            dao_id: id,
            start_time: start_time,
            end_time: end_time,
            creator: accountValue
        }),
      });
  
      const result = await response.json();
      console.log(result);
      router.push(`/community/${id}`);
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-xl mx-auto w-full justify-center space-y-4 rounded-md shadow-md">
            <h1 className='text-lg text-gray-400'>Create a New Proposal</h1>
            <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 text-black bg-gray-800 rounded-md"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
            </div>
            <div className="w-full">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 text-black bg-gray-800 rounded-md"
                  placeholder="Description"
                />
            </div>
            <div className="w-full flex flex-col sm:flex-row sm:justify-between">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-2 mt-2 sm:mt-0 text-black bg-gray-800 rounded-md sm:mr-2"
                placeholderText="Start date"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="p-2 mt-2 sm:mt-0 text-black bg-gray-800 rounded-md"
                placeholderText="End date"
              />
            </div>
            <div className="w-full flex flex-col sm:flex-row sm:justify-between">
                <Datetime 
                    dateFormat={false}
                    value={startTime}
                    onChange={setStartTime}
                    inputProps={{ 
                      placeholder: 'Start Time',
                      style: {  backgroundColor: 'rgb(31 41 55)',
                                padding:'8px',
                                borderRadius:'6px',
                      }
                    }}
                    className="mt-2 sm:mt-0 text-black sm:mr-2"
                />
                <Datetime
                    dateFormat={false}
                    value={endTime} 
                    onChange={setEndTime}
                    inputProps={{ 
                      placeholder: 'End Time',
                      style: {  backgroundColor: 'rgb(31 41 55)',
                                padding:'8px',
                                borderRadius:'6px',        
                            }
                    }}
                    className='mt-2 sm:mt-0 text-black'
                />
            </div>
            <div className='w-full'>
                <button type="submit" className="w-full py-2 mt-4 border text-white rounded-md hover:ring-2 hover:ring-custom-purple">Submit</button>
            </div>
        </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    if (!id) {
      return {
        notFound: true
      };
    }
    return {
      props: {
        id
      }
    };
};
