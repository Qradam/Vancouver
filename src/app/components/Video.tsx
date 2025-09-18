"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Video() {
  const { ref: backgroundRef, isVisible: backgroundVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen">
      {/* Blank image placeholder */}
      <div 
        ref={backgroundRef}
        className={`w-full h-screen bg-gray-800 relative flex flex-col items-center justify-center transition-all duration-1000 ${
          backgroundVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Gradient overlay on both sides */}
        <div className="absolute inset-0 video-gradient-overlay z-10">
            <img src="/temp-img.webp" alt="Video Background" className="w-full h-full object-cover" />
        </div>
        
        {/* Text in bottom left */}
        <div 
          ref={textRef}
          className={`absolute bottom-6 md:bottom-12 z-20 w-[95%] md:w-[90%] mx-auto px-4 md:px-0 transition-all duration-1000 delay-500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white italic">
            Highlights 
          </h2>
        </div>
      </div>
    </section>
  );
}
