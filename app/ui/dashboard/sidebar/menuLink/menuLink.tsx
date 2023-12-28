"use client"
import React from 'react';
import Link from '@/node_modules/next/link';
import { usePathname } from '@/node_modules/next/navigation';

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} passHref className={`flex items-center px-4 py-2 ${pathname === item.path ? 'bg-gray-700 text-white' : 'hover:text-white hover:bg-gray-700'}`}>
        {item.icon}
        <span className="ml-2">{item.title}</span>      
    </Link>
  );
};

export default MenuLink;
