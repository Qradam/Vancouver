"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Video() {
  const { ref: backgroundRef, isVisible: backgroundVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="relative w-full">
      {/* video section for clip showcase */}
      <div 
        ref={backgroundRef}
        className={`w-full bg-gray-800 relative flex flex-col items-center justify-center transition-all duration-1000 ${
          backgroundVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Video container with aspect ratio preservation */}
        <div className="relative w-full aspect-video">
          <video
            src="/leagueClip.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
          
          {/* Gradient overlay that follows the video dimensions */}
          <div className="absolute inset-0 video-gradient-overlay pointer-events-none z-10" />
        </div>
        
        {/* Text overlay positioned over the video */}
        <div 
          ref={textRef}
          className={`absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20 transition-all duration-1000 delay-500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white italic drop-shadow-lg">
            Highlights 
          </h2>
        </div>
      </div>
    </section>
  );
}