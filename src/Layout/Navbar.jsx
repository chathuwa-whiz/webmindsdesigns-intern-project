import { Menu, XIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const getLinkClass = (path) => {
    const basePath = path === '/' ? '' : path;
    return `uppercase font-bold ${currentPath === basePath ? 'text-gray-400' : 'hover:text-orange-400'}`;
  };

  return (
    <nav className='sticky top-0 z-50 py-3 bg-transparent backdrop-blur-xl'>
      <div className='container px-4 py-4 mx-auto relative text-sm'>
        
        {/* Desktop Menu */}
        <div className='flex justify-between items-center'>
          <div>
            <ul className='hidden lg:flex space-x-4'>
              <li>
                <a href='/' className={getLinkClass('')}>Home</a>
              </li>
              <li>
                <a href='products' className={getLinkClass('products')}>Products</a>
              </li>
              <li>
                <a href='contact' className={getLinkClass('contact')}>Contact</a>
              </li>
            </ul>
          </div>

          <div className='hidden lg:block'>
            <a href='/' className='text-3xl font-bold tracking-wider'>
              <span className='text-white'>Sore</span>
              <div className='inline-flex w-2 h-8 bg-orange-400 ml-2 mb-2'></div>
              <div className='inline-flex w-2 h-2 bg-orange-400 ml-2'></div>
            </a>
          </div>

          <div>
            <ul className='hidden lg:flex space-x-4'>
              <li>
                <a href='gallery' className={getLinkClass('gallery')}>gallery</a>
              </li>
              <li>
                <a href='info' className={getLinkClass('info')}>info</a>
              </li>
            </ul>
          </div>

          <div className='lg:hidden flex justify-between items-center w-full'>
            <a href='/' className='text-2xl font-bold tracking-wider'>
              <span className='text-white'>Sore</span>
              <div className='inline-flex w-1.5 h-6 bg-orange-400 ml-2 mb-1.5'></div>
              <div className='inline-flex w-1.5 h-1.5 bg-orange-400 ml-2'></div>
            </a>
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <XIcon /> : <Menu />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-black/80 rounded-xl mt-10'>
            <ul className='flex flex-col items-center justify-center space-y-4'>
              <li>
                <a href='/' className={getLinkClass('')}>Home</a>
              </li>
              <li>
                <a href='products' className={getLinkClass('products')}>Products</a>
              </li>
              <li>
                <a href='contact' className={getLinkClass('contact')}>Contact</a>
              </li>
              <li>
                <a href='gallery' className={getLinkClass('gallery')}>Gallery</a>
              </li>
              <li>
                <a href='info' className={getLinkClass('info')}>Info</a>
              </li>
              <li>
                <a href='about' className={getLinkClass('about')}>About</a>
              </li>
              <li>
                <a href='news' className={getLinkClass('news')}>News</a>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}