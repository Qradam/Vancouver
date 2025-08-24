import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6  backdrop-blur-sm border border-[0.8px] border-w33">
      <div className="flex items-center space-x-4">
        <img src="/logo.svg" alt="League" className="" width={48} height={48}/>
        <p className="text-gray-300 text-sm max-w-xs">
          Lorem ipsum dolor sit amet consectetur. Congue nulla sed turpis vulputate sit quam.
        </p>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        {['HOME', 'TEAM', 'ABOUT US', 'SOCIAL MEDIA', 'CONTACT'].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-white uppercase font-medium hover:text-pink-400 transition-colors duration-300 hover:scale-105 transform"
          >
            {item}
          </Link>
        ))}
      </nav>
      
      <div className="md:hidden">
        <button className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
