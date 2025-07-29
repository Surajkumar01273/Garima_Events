import React, { useEffect, useState } from 'react';
import {  FaBars } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

const SecondNavbar = () => {

  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [navcolor, setNavColor] = useState(false);

  const handleNavcolor = () => {
    if(location.pathname === '/adult-birthday' ||
       location.pathname === '/anniversary-decoration' || 
       location.pathname === '/baby-shower' ||
       location.pathname === '/kids-birthday' || 
       location.pathname === '/banquet-hall' ||
       location.pathname === '/just-married' ||
       location.pathname === '/room-decoration') {
      setNavColor(true);
    }
    else {
      if(
        location.pathname === '/our-gallery' ||
        location.pathname === '/contact' ||
        location.pathname === '/about') {
        setNavColor(false);
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 220) {
        setShowNavbar(true);
      } else if (scrollY <= 80) {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-white shadow px-6 py-6 flex items-center justify-between ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Left - Hamburger */}
      <div
        className='text-2xl cursor-pointer z-20'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </div>

      {/* Center - Nav Links (desktop only) */}

      <div className='hidden lg:flex gap-16 font-semibold text-black text-lg'>
        <Link  onMouseEnter={handleNavcolor} to='/' className={location.pathname === '/' ? 'text-amber-400' : 'hover:text-amber-400'}>Home</Link>
        <Link  onMouseEnter={handleNavcolor} to='/about' className={location.pathname === '/about' ? 'text-amber-400' : 'hover:text-amber-400'}>About</Link>

        {/* Activities Dropdown */}

        <div className='relative group'>
          <button className='text-lg font-semibold text-black'>
           <Link 
           className={navcolor ? 'text-amber-400' : ''}
           >Activities</Link>
          </button>
          <div onMouseEnter={handleNavcolor} className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-70 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 invisible group-hover:visible'>
            <Link to='/adult-birthday' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm'>
              Adult Birthday
            </Link>
            <Link to='/anniversary-decoration' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm my-4'>
              Anniversary Decoration
            </Link>
            <Link to='/baby-shower' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm'>
              Baby Shower And Welcome Baby
            </Link>
             <Link to='/kids-birthday' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm my-4'>
              Kids Birthday
            </Link>
             <Link to='/banquet-hall' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm'>
              Banquet Halls
            </Link>
             <Link to='/just-married' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm my-4'>
              Just Married
            </Link>
             <Link to='/room-decoration' className='block px-4 py-2 hover:text-amber-600 hover:bg-gray-300 text-sm'>
              Room Decoration
            </Link>
          </div>
        </div>

        <Link  onMouseEnter={handleNavcolor} to='/our-gallery' className={location.pathname === '/our-gallery' ? 'text-amber-400' : 'hover:text-amber-400'}>Our Gallery</Link>
        <Link  onMouseEnter={handleNavcolor} to='/contact' className={location.pathname === '/contact' ? 'text-amber-400' : 'hover:text-amber-400'}>Contact</Link>
      </div>

      {/* Right - Contact & Button */}
      <div className='flex items-center gap-6'>
        <div className='hidden md:flex items-center gap-3'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <FaPhone className='text-black' />
          </div>
          <div className='text-sm leading-tight'>
            <div className='text-gray-500'>PHONE:</div>
            <a
              href='tel:+919509720327'
              className='text-sky-500 font-semibold text-lg'
            >
              +91 9870576497
            </a>
          </div>
        </div>

       <Link to='/contact'>
        <button className='bg-amber-400 text-white px-6 py-3 rounded-sm font-medium hover:bg-amber-500 transition'>
          Contact Me →
        </button>
       </Link>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-10 md:hidden'
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0  w-80 bg-white shadow-lg z-30 flex flex-col gap-3 px-4 pb-20 transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close (cross) button */}
        <div className='flex justify-between  pt-2'>
         <Link to='/'>
          <img src="public/footer_img/footer_img.png" alt="" className='w-[200px]'/>
         </Link>
          <button
            className='text-lg text-black'
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Mobile Links */}
        <Link
          to='/'
          className='text-black text-md font-bold'
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <hr />
        <Link
          to='/about'
          className='text-black text-md font-bold'
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <hr />


        {/* Expandable Activities Submenu */}

        <div className='flex flex-col gap-2'>
          <button
            className='text-black text-md flex justify-between items-center font-bold'
            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
          >
            Activities
            <span>{mobileSubmenuOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}</span>
          </button>
          {mobileSubmenuOpen && (
            <div className='ml-2 flex flex-col gap-2'>
              <Link
                to='/adult-birthday'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-[]'
                onClick={() => setMenuOpen(false)}
              >
                Adult Birthday
              </Link>
              <Link
                to='anniversary-decoration'
               className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-zinc-400'
                onClick={() => setMenuOpen(false)}
              >
                Anniversary Decoration
              </Link>
              <Link
                to='/baby-shower'
              className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-zinc-400'
                onClick={() => setMenuOpen(false)}
              >
                Baby Shower And Welcome Baby
              </Link>
              <Link
                to='/kids-birthday'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-zinc-400'
                onClick={() => setMenuOpen(false)}
              >
               Kids Birthday
              </Link>
              <Link
                to='/banquet-hall'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-zinc-400'
                onClick={() => setMenuOpen(false)}
              >
                Banquet Halls
              </Link>
              <Link
                to='/just-married'
               className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-zinc-400'
                onClick={() => setMenuOpen(false)}
              >
                Just Married
              </Link>
              <Link
                to='/room-decoration'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4 hover:text-white hover:bg-zinc-700'
                onClick={() => setMenuOpen(false)}
              >
                Room Decoration
              </Link>
            </div>
          )}
        </div>
        <hr />

        <Link
          to='/our-gallery'
          className='text-black text-md font-bold'
          onClick={() => setMenuOpen(false)}
        >
          Our Gallery
        </Link>
        <hr />
        <Link
          to='/contact'
          className='text-black text-md font-bold'
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default SecondNavbar;
