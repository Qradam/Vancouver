"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutUs() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section id="aboutUs" className="py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl m-auto w-full ">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full">
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white italic">ABOUT US</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Congue nulla sed turpis vulputate sit quam. 
              Dis sit etiam vestibulum sit laoreet. Dui risus odio arcu venenatis lobortis malesuada in eleifend.
            <br /><br />
              Business Inquiries: yvrimpact@gmail.com
            </p>
            <button className="angled-button bg-pink-600 text-black px-8 py-3">
              <div className="angled-button-content">
                <a href="mailto:yvrimpact@gmail.com">CONTACT US</a>
              </div>
            </button>
          </div>
          
          <div 
            ref={imageRef}
            className={`w-full h-80 flex items-center justify-center transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <img src="/logo.svg" alt="Vancouver Impact Logo" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
