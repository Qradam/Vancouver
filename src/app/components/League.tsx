"use client";

import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function League() {
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation();

  return (
    <section id="league" className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 md:p-6 lg:p-12 bg-img-hero-reverse">
        <div 
          ref={containerRef}
          className={`bg-[#150E2190] w-full md:w-[95%] lg:w-[90%] py-[2rem] md:py-[3rem] lg:py-[4rem] border border-[0.8px] border-w33 flex flex-col gap-[1.5rem] md:gap-[2rem] items-center justify-center transition-all duration-1000 ${
            containerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
            <div 
              ref={logoRef}
              className={`transition-all duration-1000 delay-200 ${
                logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img src="/logo-group.png" alt="League" className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-none" />
            </div>
            
            <h2 
              ref={titleRef}
              className={`text-lg md:text-2xl lg:text-4xl font-bold text-white italic text-center px-4 md:px-8 transition-all duration-1000 delay-400 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Canadian Esports Organization
            </h2>
            
            <div 
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-1000 delay-600 ${
                buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="angled-button angled-button-pink px-8 py-3">
                <div className="angled-button-content">
                <Link href="/#aboutUs">ABOUT US</Link>
                </div>
              </button>



              <button className="angled-button angled-button-purple px-8 py-3">
                <div className="angled-button-content">
                  <Link href="https://www.twitch.tv/videos/2534785642?t=2h36m51s" target="_blank" rel="noopener noreferrer">VOD</Link>
                </div>
              </button>
              
            </div>
        </div>
    </section> 
  );
}