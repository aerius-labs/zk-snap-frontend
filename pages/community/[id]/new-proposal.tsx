// pages/proposal.js
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { GetServerSideProps } from 'next';

export default function Proposal({id}:any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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
    const start_time = combineDateTime(startDate, startTime);
    const end_time = combineDateTime(endDate, endTime);
    // Handle form submission logic here
    const response = await fetch('http://localhost:3001/api/postProposal', {
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
            creator: "B62qqN8ErUKLx7EhvgMBRQK56AyQborFFnVkjXjvmS679Qwor7b4QE8"
        }),
      });
  
      const result = await response.json();
      console.log(result);

  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="flex border border-custom-purple flex-col w-full items-center max-w-xl mx-auto p-6 justify-center space-y-4 rounded-md shadow-md">
            <h1 className='text-lg m-6 text-custom-purple'>Create a New Proposal</h1>
            <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 text-black bg-gray-300 rounded-md"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
            </div>
            <div className="w-full">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 text-black bg-gray-300 rounded-md"
                  placeholder="Description"
                />
            </div>
            <div className="w-full">
                <DatePicker
                  selected={startDate} 
                  onChange={(date: any) => setStartDate(date)} 
                  className="w-full p-2 text-black bg-gray-300 rounded-md"
                />
            </div>
            <div className="w-full">
                <DatePicker 
                  selected={endDate} 
                  onChange={(date: any) => setEndDate(date)} 
                  className="p-2 text-black bg-gray-300 rounded-md"
                />
            </div>
            <div className="w-full">
                <Datetime 
                    dateFormat={false}
                    value={startTime}
                    onChange={setStartTime}
                    inputProps={{ placeholder: 'Select Start Time' }}
                />
            </div>
            <div className="w-full">
                <Datetime
                    dateFormat={false}
                    value={endTime} 
                    onChange={setEndTime}
                    inputProps={{ placeholder: 'Select End Time' }}
                />
            </div>
            <div>
                <button type="submit" className="px-4 py-2 border border-custom-purple text-white rounded-md hover:ring-2 hover:ring-custom-purple">Submit</button>
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
