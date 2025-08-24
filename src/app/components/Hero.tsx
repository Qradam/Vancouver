"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-6 lg:p-12 bg-img-hero">
      <div className=" space-y-8 max-w-2xl">
        <div 
          ref={titleRef}
          className={`space-y-4 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight display-font">
            VANCOUVER<br />
            IMPACT
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Congue nulla sed turpis vulputate sit quam. 
            Dis sit etiam vestibulum sit laoreet. Dui risus odio arcu venenatis lobortis malesuada in eleifend.
          </p>
        </div>
        
        <div 
          ref={buttonRef}
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 z-10 delay-300 ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="angled-button angled-button-pink px-8 py-3">
            <div className="angled-button-content">
              BUTTON
            </div>
          </button>
          <button className="angled-button angled-button-white px-8 py-3">
            <div className="angled-button-content">
              BUTTON
            </div>
          </button>
        </div>
      </div>
      
      <div className=" flex  mt-12 lg:mt-0">
        <div>
          <img src="/logo.webp" alt="Hero Image" className="w-full h-full object-cover floating-animation" />
        </div>
      </div>
    </section>
  );
}
