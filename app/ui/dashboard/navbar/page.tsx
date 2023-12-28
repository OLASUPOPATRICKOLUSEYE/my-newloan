"use client";
// Navbar.tsx
import { usePathname } from 'next/navigation';
import React from 'react';
import { MdOutlineChat, MdNotifications, MdPublic, MdSearch, MdLogout, MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-gray-800 p-4 flex flex-col md:flex-row items-center">
      <div className="text-white mb-2 md:mb-0 md:mr-4 md:flex-shrink-0 uppercase">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center md:ml-auto">
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => console.log('Toggle mobile menu')}>
            <MdMenu size={24} />
          </button>
        </div>

        {/* Search Box (hidden on mobile) */}
        <div className="hidden md:relative md:mb-2 md:mr-4 md:flex items-center">
          <MdSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search........"
            className="pl-2 py-1 ml-2 rounded-md border border-gray-600 focus:outline-none text-sm bg-gray-700"
          />
        </div>

        {/* Icons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>

        {/* Logout Button (hidden on mobile) */}
        <button className="hidden md:flex items-center justify-center p-2 bg-red-900 hover:bg-red-800 text-white rounded-md ml-4">
          <MdLogout className="mr-2" />
          Logout
        </button>
      </div>

      {/* Mobile Menu (visible on mobile) */}
      <div className="md:hidden mt-4 w-full" style={{ display: 'none' }}>
        {/* Include your mobile menu items here */}
        <div className="flex flex-col items-center">
          <button className="text-white" onClick={() => console.log('Mobile menu item 1')}>
            Mobile Item 1
          </button>
          <button className="text-white mt-2" onClick={() => console.log('Mobile menu item 2')}>
            Mobile Item 2
          </button>
          {/* Add more mobile menu items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
