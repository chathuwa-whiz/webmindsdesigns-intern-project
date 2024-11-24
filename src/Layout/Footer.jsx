import React from 'react';
import { useLocation } from 'react-router';

export default function Footer() {

  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');

  const getLinkClass = (path) => {
    const basePath = path === '/' ? '' : path;
    return `uppercase font-bold ${currentPath === basePath ? 'text-gray-400' : 'hover:text-orange-400'}`;
  };

  return (
    <footer className="lg:fixed bottom-0 w-full bg-transparent text-white py-4 px-4 backdrop-blur-xl">
      <div className="container mx-auto">
        
        {/* Right-aligned List */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="about" className={getLinkClass('about')}>
              About
            </a>
          </li>
          <li>
            <a href="news" className={getLinkClass('news')}>
              News
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}
