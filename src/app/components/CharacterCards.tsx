

export default function CharacterCards() {
  return (
    <section id="characterCards" className="flex flex-col items-center justify-center p-6 lg:p-12 min-h-screen bg-gradient-blur ">
      {/* Original content */}
      <div className=" w-[90%] py-[4rem] flex flex-col gap-[2rem] items-center justify-center mb-12">
        <img src="/logoxleague.png" alt="League" className="" />
        <h2 className="text-3xl md:text-4xl text-white text-center italic"><span className='font-bold'>Vancouver Impact Roster </span> </h2>
      </div>
      
      {/* Card 1 */}
      <div className="card-before sticky top-[15%] bg-[url('/3.webp')] bg-cover bg-bottom w-full md:w-[60%] border border-[0.8px] border-w33 md:-skew-x-12 mb-8 ">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:skew-x-12">
          <div className='flex flex-col pl-0 md:pl-10 justify-center items-center md:items-start pt-8 md:pt-0'>
          <div className="w-6 h-6  flex items-center justify-center mb-5">
            <img src="/Top_icon.webp" alt="" />
          </div>
          <div className="text-center md:text-left">
            {/* <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>*/}
            <p className="text-sm text-gray-400 mb-2">TOP LANE </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold italic">DRAGOON</h2>
          </div></div>
          
          {/* Mobile: Photo below text */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img src="/top.webp" alt="" className="w-full h-64 object-contain object-bottom" />
          </div>
          
          {/* Desktop: Photo on right */}
          <div className="hidden md:flex w-[36rem] h-[28rem] items-end justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain object-bottom" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card-before sticky top-[15%] bg-[url('/4.webp')] bg-cover bg-bottom w-full md:w-[60%] border border-[0.8px] border-w33 md:-skew-x-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:skew-x-12">
          <div className='flex flex-col pl-0 md:pl-10 justify-center items-center md:items-start pt-8 md:pt-0'>
          <div className="w-6 h-6 flex items-center justify-center mb-5">
            <img src="/Jungle_icon.webp" alt="" />
          </div>
          <div className="text-center md:text-left">
            {/* <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>*/}
            <p className="text-sm text-gray-400 mb-2">JUNGLE </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold italic">SHIMMER</h2>
          </div></div>
          
          {/* Mobile: Photo below text */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img src="/jg.webp" alt="" className="w-full h-64 object-contain object-bottom" />
          </div>
          
          {/* Desktop: Photo on right */}
          <div className="hidden md:flex w-[36rem] h-[28rem] items-end justify-center -mt-[6rem]">
            <img src="/jg.webp" alt="" className="w-full h-full object-contain object-bottom" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card-before sticky top-[15%] bg-[url('/1.webp')] bg-cover bg-bottom w-full md:w-[60%] border border-[0.8px] border-w33 md:-skew-x-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:skew-x-12">
          <div className='flex flex-col pl-0 md:pl-10 justify-center items-center md:items-start pt-8 md:pt-0'>
          <div className="w-6 h-6 flex items-center justify-center mb-5">
            <img src="/Middle_icon.webp" alt="" />
          </div>
          <div className="text-center md:text-left">
            {/* <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>*/}
            <p className="text-sm text-gray-400 mb-2">MID LANE </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold italic">SUDZZI</h2>
          </div></div>
          
          {/* Mobile: Photo below text */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img src="/mid.webp" alt="" className="w-full h-64 object-contain object-bottom" />
          </div>
          
          {/* Desktop: Photo on right */}
          <div className="hidden md:flex w-[36rem] h-[28rem] items-end justify-center -mt-[6rem]">
            <img src="/mid.webp" alt="" className="w-full h-full object-contain object-bottom" />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card-before sticky top-[15%] bg-[url('/5.webp')] bg-cover bg-bottom w-full md:w-[60%] border border-[0.8px] border-w33 md:-skew-x-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:skew-x-12">
          <div className='flex flex-col pl-0 md:pl-10 justify-center items-center md:items-start pt-8 md:pt-0'>
          <div className="w-6 h-6 flex items-center justify-center mb-5">
            <img src="/Bottom_icon.webp" alt="" />
          </div>
          <div className="text-center md:text-left">
            {/* <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>*/}
            <p className="text-sm text-gray-400 mb-2">BOT LANE </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold italic">ZEV</h2>
          </div></div>
          
          {/* Mobile: Photo below text */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img src="/adc.webp" alt="" className="w-full h-64 object-contain object-bottom" />
          </div>
          
          {/* Desktop: Photo on right */}
          <div className="hidden md:flex w-[36rem] h-[28rem] items-end justify-center -mt-[6rem]">
            <img src="/adc.webp" alt="" className="w-full h-full object-contain object-bottom" />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card-before sticky top-[15%] bg-[url('/2.webp')] bg-cover bg-bottom w-full md:w-[60%] border border-[0.8px] border-w33 md:-skew-x-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:skew-x-12 ">
          <div className='flex flex-col pl-0 md:pl-10 justify-center items-center md:items-start pt-8 md:pt-0'>
          <div className="w-6 h-6 flex items-center justify-center mb-5">
            <img src="/Support_icon.webp" alt="" />
          </div>
          <div className="text-center md:text-left">
            {/* <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>*/}
            <p className="text-sm text-gray-400 mb-2">SUPPORT </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold italic">NUKEZ</h2>
          </div></div>
          
          {/* Mobile: Photo below text */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img src="/supp.webp" alt="" className="w-full h-64 object-contain object-bottom" />
          </div>
          
          {/* Desktop: Photo on right */}
          <div className="hidden md:flex w-[36rem] h-[28rem] items-end justify-center -mt-[6rem]">
            <img src="/supp.webp" alt="" className="w-full h-full object-contain object-bottom" />
          </div>
        </div>
      </div>


      {/* Card 6 */}
      <div className="card-before sticky top-[15%] bg-[url('/2.webp')] bg-cover bg-bottom w-full md:w-[60%] border border-[0.8px] border-w33 md:-skew-x-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:skew-x-12 ">
          <div className='flex flex-col pl-0 md:pl-10 justify-center items-center md:items-start pt-8 md:pt-0'>
          <div className="w-6 h-6  rounded-sm flex items-center justify-center mb-5">
            <img src="/Support_icon.webp" alt="" />
          </div>
          <div className="text-center md:text-left">
            {/* <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>*/}
            <p className="text-sm text-gray-400 mb-2">COACH </p>
            <h2 className="text-3xl md:text-4xl text-white font-bold italic">TAKI</h2>
          </div></div>
          
          {/* Mobile: Photo below text */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <img src="/top.webp" alt="" className="w-full h-64 object-contain object-bottom" />
          </div>
          
          {/* Desktop: Photo on right */}
          <div className="hidden md:flex w-[36rem] h-[28rem] items-end justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain object-bottom" />
          </div>
        </div>
      </div>

    </section>
  );
}