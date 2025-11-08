"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function LeagueTeams() {
  const { ref: juniorRef, isVisible: juniorVisible } = useScrollAnimation();
  const { ref: challengersRef, isVisible: challengersVisible } = useScrollAnimation();

  return (
    <section
      id="LeagueTeams"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 md:p-6 lg:p-12 bg-img-hero-reverse gap-6 lg:gap-0"
    >
      {/* Challengers Roster Box */}
      <div
        ref={challengersRef}
        className={`relative bg-[#150E2190] w-full md:w-[95%] lg:w-[45%]
        py-[2rem] md:py-[3rem] lg:py-[4rem]
        border border-[0.8px] border-w33
        md:skew-x-6
        transition-all duration-1000 mx-2
        ${challengersVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="md:-skew-x-6 flex flex-col gap-[1.5rem] md:gap-[2rem] items-center justify-center">
          <h2
            className={`text-lg md:text-2xl lg:text-4xl font-bold italic text-center px-4 md:px-8
            transition-all duration-1000 delay-400
            ${challengersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Vancouver Impact Challengers Roster
          </h2>

          <ul className="text-white space-y-3 text-lg md:text-xl">
            <li className="flex items-center gap-3">
              <img src="/Top_icon.webp" alt="Top icon" className="w-6 h-6" />
              <span>Top: Marcopa</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Jungle_icon.webp" alt="Jungle icon" className="w-6 h-6" />
              <span>Jungle: TBD</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Middle_icon.webp" alt="Middle icon" className="w-6 h-6" />
              <span>Middle: Pigeon</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Bottom_icon.webp" alt="Bottom icon" className="w-6 h-6" />
              <span>Bottom: TBD</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Support_icon.webp" alt="Support icon" className="w-6 h-6" />
              <span>Support: Marshal</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Junior Roster */}
      <div
        ref={juniorRef}
        className={`relative bg-[#150E2190] w-full md:w-[95%] lg:w-[45%]
        py-[2rem] md:py-[3rem] lg:py-[4rem]
        border border-[0.8px] border-w33
        md:skew-x-6
        transition-all duration-1000 mx-2
        ${juniorVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="md:-skew-x-6 flex flex-col gap-[1.5rem] md:gap-[2rem] items-center justify-center">
          <h2
            className={`text-lg md:text-2xl lg:text-4xl font-bold italic text-center px-4 md:px-8
            transition-all duration-1000 delay-400
            ${juniorVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Vancouver Impact Junior Roster
          </h2>

          <ul className="text-white space-y-3 text-lg md:text-xl">
            <li className="flex items-center gap-3">
              <img src="/Top_icon.webp" alt="Top icon" className="w-6 h-6" />
              <span>Top: Chia</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Jungle_icon.webp" alt="Jungle icon" className="w-6 h-6" />
              <span>Jungle: Peekaboo</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Middle_icon.webp" alt="Middle icon" className="w-6 h-6" />
              <span>Middle: Smudge</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Bottom_icon.webp" alt="Bottom icon" className="w-6 h-6" />
              <span>Bottom: Ivy</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/Support_icon.webp" alt="Support icon" className="w-6 h-6" />
              <span>Support: Zach</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
