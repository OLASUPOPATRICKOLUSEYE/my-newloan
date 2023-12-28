"use client"
import React, { useState } from 'react';
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout } from 'react-icons/md';
import Image from '@/node_modules/next/image';
import MenuLink from './menuLink/menuLink';

const menuItems = [
  {
    title: 'Page',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'Transaction',
        path: '/dashboard/transaction',
        icon: <MdAttachMoney />
      },
    ]
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />
      }
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />
      }
    ]
  }
];

const Sidebar = () => {
  

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      {/* Sidebar Header */}
      <div className="flex items-center p-4 flex-row ">
        <Image src="/unity.jpeg" alt="image" width={50} height={50} className="rounded-full mr-2" />
        <div className='flex flex-col py-5'> 
          <span className="font-bold">Zach Pascal</span>
          <span className="text-sm">Administrator</span>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="flex-grow w-64">
        {menuItems.map((cat) => (
          <li key={cat.title} className="mb-4">
            <button
              className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-600 focus:outline-none"
            >
              <span>{cat.title}</span>
            </button>
            <ul className="pl-4">
              {cat.list.map((item, index) => (
                <MenuLink item={item} key={item.title} index={index + 1} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
