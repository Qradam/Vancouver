"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation();

  return (
    <section className="flex flex-col mt-6 lg:flex-row items-center justify-center min-h-0 lg:min-h-screen p-4 md:p-6 lg:p-12 bg-img-hero">
      <div className="space-y-4 max-w-2xl relative z-20">
        <div 
          ref={titleRef}
          className={`space-y-3 md:space-y-4 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight display-font">
            VANCOUVER<br />
            IMPACT
          </h1>
          <p className="text-gray-300 leading-relaxed text-sm text-center md:text-base">
            Vancouver's very own League of Legends Esports team, competing in the NACL. This organization intends to compete at the highest level, by breaking into the LTA North.
          </p>
        </div>
          
        <div 
          ref={buttonRef}
          className={`hidden md:flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-1000 z-10 delay-300 ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="angled-button angled-button-pink px-14 py-4 md:px-16 py-2 md:py-3 text-sm md:text-base relative z-30">
            <div className="angled-button-content">
              <a href="https://lolesports.com/teams/vancouver-impact" target="_blank" rel="noopener noreferrer">SCHEDULE</a>
            </div>
          </button>
              
          <button className="angled-button angled-button-white px-14 py-4 md:px-16 py-2 md:py-3 text-sm md:text-base relative z-30">
            <div className="angled-button-content">
              <a href="#characterCards">ROSTER</a>
            </div>
          </button>
        </div>
      </div>
      
      <div className="flex mt-0 lg:mt-0 relative z-20">
        <div>
          <img src="/logo.webp" alt="Hero Image" className="w-full h-full object-cover floating-animation" />
        </div>
      </div>
    </section>
  );
}