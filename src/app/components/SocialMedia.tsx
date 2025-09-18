"use client";

import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SocialMedia() {
  const { ref: topRowRef, isVisible: topRowVisible } = useScrollAnimation();
  const { ref: bottomRowRef, isVisible: bottomRowVisible } = useScrollAnimation();

  return (
    <section className="backdrop-gradient">
      <div 
        ref={topRowRef}
        className={`flex flex-col md:flex-row items-center justify-center lg:pt-12 border-t border-w33 px-6 md:px-12 transition-all duration-1000 ${
          topRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Link 
          href="https://discord.gg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-[#150E2190] w-full md:w-[48%] lg:w-[25%] py-[2rem] border border-[0.8px] border-w33 flex flex-col gap-[2rem] items-center justify-center cursor-pointer transition-all duration-300 mb-4 md:mb-0"
          style={{ transitionDelay: '0ms' }}
        >
          <img src="/Discord.webp" alt="Discord" className="transition-transform duration-300 group-hover:scale-105" width={150} />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xs md:text-sm font-medium">{'>>'} Join</span>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(21,14,33,0)] to-[rgba(59,130,246,0.076)] to-[rgba(21,14,33,0.61)] border border-[rgba(255,255,255,0.33)] pointer-events-none"></div>
        </Link>
        
        <Link 
          href="https://x.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-[#150E2190] w-full md:w-[48%] lg:w-[25%] py-[2rem] border border-[0.8px] border-w33 flex flex-col gap-[2rem] items-center justify-center cursor-pointer transition-all duration-300 mb-4 md:mb-0"
          style={{ transitionDelay: '200ms' }}
        >
          <img src="/X.webp" alt="X (Twitter)" className="transition-transform duration-300 group-hover:scale-105" width={150} />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xs md:text-sm font-medium">{'>>'} Join</span>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(21,14,33,0)] to-[rgba(213,50,242,0.076)] to-[rgba(21,14,33,0.61)] border border-[rgba(255,255,255,0.33)] pointer-events-none"></div>
        </Link>
      </div>
      
      <div 
        ref={bottomRowRef}
        className={`flex flex-col md:flex-row items-center justify-center lg:pb-12 border-b border-w33 px-6 md:px-12 transition-all duration-1000 delay-300 ${
          bottomRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Link 
          href="https://twitch.tv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-[#150E2190] w-full md:w-[48%] lg:w-[25%] py-[2rem] border border-[0.8px] border-w33 flex flex-col gap-[2rem] items-center justify-center cursor-pointer transition-all duration-300 mb-4 md:mb-0"
          style={{ transitionDelay: '0ms' }}
        >
          <img src="/twitch.webp" alt="Twitch" className="transition-transform duration-300 group-hover:scale-105" width={150} />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xs md:text-sm font-medium">{'>>'} Join</span>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(21,14,33,0)] to-[rgba(213,50,242,0.076)] to-[rgba(21,14,33,0.61)] border border-[rgba(255,255,255,0.33)] pointer-events-none"></div>
        </Link>
        
        <Link 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-[#150E2190] w-full md:w-[48%] lg:w-[25%] py-[2rem] border border-[0.8px] border-w33 flex flex-col gap-[2rem] items-center justify-center cursor-pointer transition-all duration-300 mb-4 md:mb-0"
          style={{ transitionDelay: '200ms' }}
        >
          <img src="/youtube.webp" alt="YouTube" className="transition-transform duration-300 group-hover:scale-105" width={150} />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xs md:text-sm font-medium">{'>>'} Join</span>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(21,14,33,0)] to-[rgba(239,68,68,0.076)] to-[rgba(21,14,33,0.61)] border border-[rgba(255,255,255,0.33)] pointer-events-none"></div>
        </Link>
      </div>
    </section>
  );
}