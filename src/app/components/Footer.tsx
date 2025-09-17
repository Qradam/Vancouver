import Link from 'next/link';

export default function Footer() {

  const navItems = [{name: 'HOME', href: '#hero'}, {name: 'SOCIAL MEDIA', href: '#socialMedia'}, {name: 'TEAM', href: '#characterCards'}, {name: 'ABOUT US', href: '#aboutUs'}, {name: 'CONTACT', href: '#footer'}];

  return (
    <footer className="py-8 px-6 bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="League" className="" width={48} height={48}/>
            <p className="text-gray-300 text-sm max-w-md">
              Vancouver Impact Canadian Esports Organization
            </p>
          </div>
          
        
        </div>
      </div>
    </footer>
  );
}
