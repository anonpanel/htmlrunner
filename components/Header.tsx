
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center p-2.5 bg-[#1e1e2e]/80 backdrop-blur-sm border-b border-gray-700/50 shadow-md z-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 text-indigo-400">
            <path d="M8 20.25C8 20.9404 8.55964 21.5 9.25 21.5H14.75C15.4404 21.5 16 20.9404 16 20.25V18.5H8V20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 9.75C17.5 13.084 15.084 15.75 12 15.75C8.91601 15.75 6.5 13.084 6.5 9.75C6.5 6.41601 8.91601 3.75 12 3.75C15.084 3.75 17.5 6.41601 17.5 9.75Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 15.75V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 18.5H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      <h1 className="text-xl font-bold tracking-wider text-gray-100">
        Web Weaver <span className="text-indigo-400">IDE</span>
      </h1>
    </header>
  );
};

export default Header;
