"use client";
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Footer from '../ui/dashboard/footer/page';
import Navbar from '../ui/dashboard/navbar/page';
import Sidebar from '../ui/dashboard/sidebar/page';

const Layout = ({ children }: any) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden z-10">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 bg-gray-800 text-white focus:outline-none"
        >
          {isSidebarOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
        </button>
      </div>

      {/* Overlay (visible when sidebar is open on mobile) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          style={{ pointerEvents: 'auto' }}
        ></div>
      )}

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar (visible on larger screens) */}
        <div
          className={`md:flex-shrink-0 ${
            isSidebarOpen
              ? 'block absolute top-0 left-0 h-full transition-all duration-300 ease-in z-30'
              : 'hidden md:block transition-all duration-300 ease-out'
          }`}
        >
          <Sidebar />
        </div>

        <div className="flex flex-col flex-grow overflow-hidden">
          <div className="flex-shrink-0">
            {/* Navbar */}
            <Navbar />
          </div>

          <main className="flex-grow flex overflow-hidden">
            {/* Main Content */}
            <div className="flex-grow overflow-x-hidden overflow-y-auto p-4">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
