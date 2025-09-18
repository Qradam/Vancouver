'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{name: 'HOME', href: '#hero'}, {name: 'SOCIAL MEDIA', href: '#socialMedia'}, {name: 'TEAM', href: '#characterCards'}, {name: 'ABOUT US', href: '#aboutUs'}, {name: 'CONTACT', href: '#footer'}];
  
  return (
    <>
      <header id="header" className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 backdrop-blur-sm border border-[0.8px] border-w33 relative z-50">
        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center space-x-4">
            <img src="/logo.svg" alt="League" className="" width={48} height={48}/>
            <p className="text-gray-300 text-xs md:text-sm max-w-xs">
              Vancouver Impact <br></br>Canadian Esports Organization
            </p>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center p-2">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white uppercase font-medium hover:text-pink-400 transition-colors duration-300 hover:scale-105 transform"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
      
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className={`flex flex-col items-center justify-center h-full space-y-8 transition-all duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-8'} text-center`}>
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-white uppercase font-medium text-lg hover:text-pink-400 transition-all duration-300 hover:scale-105 transform text-center ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{transitionDelay: isOpen ? `${index * 100}ms` : '0ms'}}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
