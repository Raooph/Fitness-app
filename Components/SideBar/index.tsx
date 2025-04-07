'use client'
import { links } from '@/Mock/links'
import Link from 'next/link'
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const SideBar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleSidebar} className="p-2 focus:outline-none text-lime-600 bg-black w-full">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-2xl text-lime-700  transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={toggleSidebar} className="p-2 absolute top-2 right-2">
          <X size={24} />
        </button>
        <nav className="p-4">
          {links.map(({ id, title, to }) => (
            <Link key={id} href={to} className="block p-2 hover:bg-white hover:text-black">
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideBar
