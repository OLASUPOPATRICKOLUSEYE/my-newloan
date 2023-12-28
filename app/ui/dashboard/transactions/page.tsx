import Image from '@/node_modules/next/image';
import React from 'react';

const Transactions = () => {
  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold mb-4">Latest Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-2 px-2 md:px-4 border border-gray-300">Name</th>
              <th className="py-2 px-2 md:px-4 border border-gray-300">Status</th>
              <th className="py-2 px-2 md:px-4 border border-gray-300">Date</th>
              <th className="py-2 px-2 md:px-4 border border-gray-300">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-600">
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    src="/unity.jpeg"
                    alt="user_image"
                    width={40}
                    height={40}
                  />
                  <span className="ml-2">Pascal Rascal</span>
                </div>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <span className="inline-block px-2 py-1 bg-yellow-800 text-white rounded">
                  Pending
                </span>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">14.02.2024</td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">$3.200</td>
            </tr>

            <tr className="bg-gray-600">
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    src="/unity.jpeg"
                    alt="user_image"
                    width={40}
                    height={40}
                  />
                  <span className="ml-2">Pascal Rascal</span>
                </div>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <span className="inline-block px-2 py-1 bg-green-800 text-white rounded">
                  Done
                </span>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">01.08.2024</td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">$653.200</td>
            </tr>

            <tr className="bg-gray-600">
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    src="/unity.jpeg"
                    alt="user_image"
                    width={40}
                    height={40}
                  />
                  <span className="ml-2">Pascal Rascal</span>
                </div>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <span className="inline-block px-2 py-1 bg-gray-800 text-white rounded">
                  Declined
                </span>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">14.02.2024</td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">$3.200</td>
            </tr>

            <tr className="bg-gray-600">
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    src="/unity.jpeg"
                    alt="user_image"
                    width={40}
                    height={40}
                  />
                  <span className="ml-2">Pascal Rascal</span>
                </div>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">
                <span className="inline-block px-2 py-1 bg-red-800 text-white rounded">
                  Cancelled
                </span>
              </td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">14.02.2024</td>
              <td className="py-2 px-2 md:px-4 border border-gray-300">$3.200</td>
            </tr>
            {/* Add more transaction rows as needed */}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
