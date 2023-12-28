import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-md mb-4 w-full">
      <div className="flex flex-col md:flex-row items-center">
        <MdSupervisedUserCircle size={80} className="text-blue-700 mb-4 md:mb-0" />
        <div className='flex flex-col md:ml-4'>
          <span className="block text-gray-300 text-lg font-bold text-center md:text-left">Total Users</span>
          <span className="text-2xl font-bold py-4 text-center md:text-left">10,273</span>
          <span className="text-sm text-white text-center md:text-left">
            <span className="font-bold text-yellow-400">12%</span> more than the previous year
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
