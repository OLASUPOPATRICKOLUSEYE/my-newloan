import React from 'react';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import Image from '@/node_modules/next/image';

const Rightbar = () => {
  return (
    <div className="">
      <div className="bg-gray-800 p-5 rounded-md mb-4">
        <span className="text-white">Available Now</span>
        <h3 className="text-lg font-bold mb-2">How to use the new version of the admin dashboard</h3>
        <span className="text-gray-500">Takes 4 minutes to learn</span>
        <p className="text-white py-2 text-sm">
          I hope this message finds you in good health and high spirits.
          I am writing to express my deepest gratitude and overwhelming joy in the aftermath of our recent retreat.
        </p>

        <button className="flex items-center mt-2 text-white bg-gray-700 py-2 px-4 rounded-md">
          <MdPlayCircleFilled className="mr-2" />
          Watch
        </button>
      </div>

      <div className="bg-gray-800 p-5 rounded-md">
        <span className="text-white">Available Now</span>
        <h3 className="text-lg font-bold mb-2">How to use the new version of the admin dashboard</h3>
        <span className="text-gray-500">Takes 4 minutes to learn</span>
        <p className="text-white py-2 text-sm">
          I hope this message finds you in good health and high spirits.
          I am writing to express my deepest gratitude and overwhelming joy in the aftermath of our recent retreat.
        </p>

        <button className="flex items-center mt-2 text-white bg-gray-700 py-2 px-4 rounded-md">
          <MdReadMore className="mr-2" />
          Explore/Read More
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
