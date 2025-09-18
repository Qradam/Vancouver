import Link from 'next/link';

export default function Footer() {

  const navItems = [{name: 'HOME', href: '#hero'}, {name: 'TEAM', href: '#characterCards'}, {name: 'ABOUT US', href: '#aboutUs'}, {name: 'SOCIAL MEDIA', href: '#socialMedia'}, {name: 'CONTACT', href: '#footer'}];

  return (
    <footer className="py-8 px-6 bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="League" className="" width={48} height={48}/>
            <p className="text-gray-300 text-xs md:text-sm max-w-md">
              Lorem ipsum dolor sit amet consectetur. Congue nulla sed turpis vulputate sit quam. 
              Dis sit etiam vestibulum sit laoreet. Dui risus odio arcu venenatis lobortis malesuada in eleifend.
            </p>
          </div>
          
          <nav className="flex space-x-8 hidden md:flex">
          {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            scroll={true}
            className="text-white uppercase font-medium hover:text-pink-400 transition-colors duration-300 hover:scale-105 transform"
          >
            {item.name}
          </Link>
        ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
