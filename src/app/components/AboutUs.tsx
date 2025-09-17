"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutUs() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section className="py-12 px-6 flex items-center">
      <div className="max-w-7xl m-auto w-full ">
        <div className="flex flex-row lg:flex-row gap-4 lg:gap-12 items-center justify-center w-full">
          <div 
            ref={contentRef}
            className={`space-y-3 lg:space-y-6 lg:flex-1 lg:max-w-2xl transition-all duration-1000 flex-1 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-white italic">ABOUT US</h2>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              LoL Director: @nicechomperslol <br></br>Manager: @Pick3lwolf <br></br>Coach: @takimonx <br></br>#VIPTreatment
            </p>
            <a 
              href="mailto:yvrimpact@gmail.com?subject=Business Inquiry"
              className="angled-button bg-pink-600 text-black px-4 lg:px-8 py-2 lg:py-4 inline-block text-xs lg:text-base"
            >
              <div className="angled-button-content">
                Business Inquiries: yvrimpact@gmail.com
              </div>
            </a>
          </div>
          
          <div 
            ref={imageRef}
            className={`flex-1 lg:flex-1 h-40 lg:h-80 flex items-center justify-center transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <img 
              src="/logo.svg" 
              alt="Vancouver Impact Logo" 
              className="max-w-full max-h-full w-24 sm:w-32 lg:w-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}