

export default function CharacterCards() {
  return (
    <section className="flex flex-col items-center justify-center p-6 lg:p-12 min-h-screen bg-gradient-blur ">
      {/* Original content */}
      <div className=" w-[90%] py-[4rem] flex flex-col gap-[2rem] items-center justify-center mb-12">
        <img src="/logoxleague.png" alt="League" className="" />
        <h2 className="text-4xl text-white italic"><span className='font-bold'>Lorem ipsum dolor</span> sit amet consectetur. Congue </h2>
      </div>
      
      {/* Card 1 */}
      <div className="card-before sticky top-[15%] bg-[url('/3.webp')] bg-cover bg-bottom w-[60%] border border-[0.8px] border-w33 -skew-x-12 mb-8 ">
        <div className="flex justify-between gap-6 skew-x-12">
          <div className='flex flex-col pl-10 justify-center'>
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mb-5">
            <img src="/" alt="" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>
            <h2 className="text-4xl text-white font-bold italic">NAME 1</h2>
          </div></div>
          <div className="w-[22rem] h-[28rem] flex items-center justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card-before sticky top-[15%] bg-[url('/4.webp')] bg-cover bg-bottom w-[60%] border border-[0.8px] border-w33 -skew-x-12 mb-8">
        <div className="flex justify-between gap-6 skew-x-12">
          <div className='flex flex-col pl-10 justify-center'>
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mb-5">
            <img src="/" alt="" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>
            <h2 className="text-4xl text-white font-bold italic">NAME 1</h2>
          </div></div>
          <div className="w-[22rem] h-[28rem] flex items-center justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card-before sticky top-[15%] bg-[url('/1.webp')] bg-cover bg-bottom w-[60%] border border-[0.8px] border-w33 -skew-x-12 mb-8">
        <div className="flex justify-between gap-6 skew-x-12">
          <div className='flex flex-col pl-10 justify-center'>
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mb-5">
            <img src="/" alt="" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>
            <h2 className="text-4xl text-white font-bold italic">NAME 1</h2>
          </div></div>
          <div className="w-[22rem] h-[28rem] flex items-center justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card-before sticky top-[15%] bg-[url('/5.webp')] bg-cover bg-bottom w-[60%] border border-[0.8px] border-w33 -skew-x-12 mb-8">
        <div className="flex justify-between gap-6 skew-x-12 ">
          <div className='flex flex-col pl-10 justify-center'>
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <img src="/" alt="" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>
            <h2 className="text-4xl text-white font-bold italic">NAME 1</h2>
          </div></div>
          <div className="w-[22rem] h-[28rem] flex items-center justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card-before sticky top-[15%] bg-[url('/2.webp')] bg-cover bg-bottom w-[60%] border border-[0.8px] border-w33 -skew-x-12 mb-8">
        <div className="flex justify-between gap-6 skew-x-12 ">
          <div className='flex flex-col pl-10 justify-center'>
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mb-5">
            <img src="/" alt="" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Name &quot;name&quot; name</p>
            <h2 className="text-4xl text-white font-bold italic">NAME 1</h2>
          </div></div>
          <div className="w-[22rem] h-[28rem] flex items-center justify-center -mt-[6rem]">
            <img src="/top.webp" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}