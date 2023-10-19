// pages/proposal.js
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function Proposal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('Set Start Time');
  const [endTime, setEndTime] = useState('Set End Time');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, startDate, endDate, startTime, endTime });
  };

  return (
    <div className='min-h-screen flex justify-center items-center text-gray-200'>
        <form onSubmit={handleSubmit} className="flex flex-col w-full items-center max-w-xl mx-auto p-6 justify-center space-y-4 bg-gray-100 rounded-md shadow-md">
            <h1 className='text-lg m-6 text-black'>Create a New Proposal</h1>
            <div className="w-full">
                <input
                type="text"
                className="w-full p-2 text-black bg-white border rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                />
            </div>
            <div className="w-full">
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 text-black bg-white border rounded-md"
                placeholder="Description"
                />
            </div>
            <div className="w-full">
                <DatePicker 
                selected={startDate} 
                onChange={(date: any) => setStartDate(date)} 
                className="w-full p-2 text-black bg-white border rounded-md"
                />
            </div>
            <div className="w-full">
                <DatePicker 
                selected={endDate} 
                onChange={(date: any) => setEndDate(date)} 
                className="w-full p-2 text-black bg-white border rounded-md"
                />
            </div>
            <div className="w-full">
                <Datetime 
                    dateFormat={false}
                    value={startTime}
                    onChange={setStartTime}
                />
            </div>
            <div className="w-full">
                <Datetime 
                    dateFormat={false}
                    value={endTime} 
                    onChange={setEndTime}
                />
            </div>
            <div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
            </div>
        </form>
    </div>
  );
}
