"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Link from 'next/link';
import articles from '../../data/articles.json';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function LatestUpdates() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="latestUpdates" className="py-12 px-0 w-full">
      <div className="w-full backdrop-gradient">
        <div className="px-6 mb-8">
          <div 
            ref={titleRef}
            className={`flex justify-between items-center transition-all duration-1000 flex-col md:flex-row  ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white italic">Latest Updates</h2>
            <Link href="/articles" className="angled-button angled-button-white px-8 py-3 mt-4 md:mt-0">
              <div className="angled-button-content">
                SEE ALL
              </div>
            </Link>
          </div>
        </div>
        
        <div 
          ref={cardsRef}
          className={`transition-all duration-1000 delay-300 swiper-container ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="px-6"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={article.id}>
                <Link
                  href={`/article/${article.slug}`}
                  className={`group block transition-all duration-300`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div 
                    className="card-updates relative border border-[0.8px] border-w33 -skew-x-12 overflow-hidden h-80 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    <div className="skew-x-12 h-full flex flex-col justify-between p-4">
                      {/* Title */}
                      <div className="mt-4 pl-6">
                        <h3 className="text-white font-semibold text-sm md:text-base">{article.title}</h3>
                      </div>
                      
                      {/* Buttons - Floating Right */}
                      <div className="flex flex-col items-end space-y-2 mb-4 pr-2">
                        <button className="angled-button bg-blue-600 text-black px-4 py-1 text-sm">
                          <div className="angled-button-content">
                            {article.type}
                          </div>
                        </button>
                        <button className="angled-button bg-pink-600 text-black px-4 py-1 text-sm mr-2">
                          <div className="angled-button-content">
                            SEE MORE
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
