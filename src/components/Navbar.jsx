import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlineArrowRightAlt } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import SecondNavbar from './SeconNavbar';

const Navbar = () => {
  const location = useLocation();
  const [spanWith, setSpanWith] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className='w-full'>
        <div className='h-auto md:pt-4 md:h-[80px] lg:h-[180px] flex flex-col gap-y-4 bg-[#ED52DA] relative py-4 md:py-0'>
          <div className='flex justify-between items-center px-4 md:px-6'>
            {/* Left side */}
            <div className='lg:flex lg:items-center gap-6'>
              {/* Contact Info */}
              <div className='hidden lg:flex items-center gap-10'>
                <a href='tel:+91 9870576497'>
                  <p className='flex items-center text-sm gap-2 cursor-pointer'>
                    <FaPhone className='text-white text-lg mt-[5px]' />
                    +91 9870576497
                  </p>
                </a>
               <a href="mail:info@garimaevents.com">
                 <p className='flex items-center text-sm gap-2 cursor-pointer'>
                  <MdOutlineMail className='text-white text-lg mt-[5px]' />
                  info@garimaevents.com
                </p>
               </a>
              </div>

              {/* Logo */}
              <Link to='/'>
              <div className='lg:ml-[200px]'>
                <img
                  src='/nav/nav-img.png'
                  alt='nav-img'
                  className='h-[40px] w-[150px] md:h-[50px] md:w-[200px] cursor-pointer'
                />
              </div>
              </Link>
            </div>

            {/* Right side */}
            <div className='flex items-center gap-3 md:gap-4 text-white'>
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <IoLogoTwitter />
              </Link>
              <Link className='font-semibold'>BE</Link>
              <Link>
                <IoLogoYoutube />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className='w-full relative lg:w-[97.2%] bg-white left-0 md:left-6 lg:absolute lg:top-[85px] text-black z-40'>
          <div className='flex md:flex-row items-center justify-between px-4 md:px-6 py-3 md:h-[95px] gap-4 md:gap-20'>
            {/* Left side (menu and nav links) */}
            <div className='flex items-center gap-x-6 md:gap-x-16 w-full md:w-auto'>
              {/* Burger menu icon - only mobile */}
              <div className=' flex items-center'>
                <div className='hidden md:block bg-[#F0B55B] h-[96px] w-[80px] ml-[-25px]'></div>

                <div
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  onMouseEnter={() => setSpanWith(true)}
                  onMouseLeave={() => setSpanWith(false)}
                  className='flex flex-col cursor-pointer justify-center gap-1 z-50 ml-4'
                >
                  <span
                    className={`${
                      spanWith ? 'w-6' : 'w-4'
                    } h-[2px] bg-black transition-all duration-300`}
                  ></span>
                  <span className='h-[2px] w-6 bg-black'></span>
                  <span
                    className={`${
                      spanWith ? 'w-6' : 'w-5'
                    } h-[2px] bg-black transition-all duration-300`}
                  ></span>
                </div>
              </div>

              {/* Desktop nav links */}
              <ul className='hidden lg:flex gap-12 text-black text-md font-semibold relative'>
                <li>
                  <Link
                    to='/'
                    className={
                      location.pathname === '/' ? 'text-amber-500' : ''
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className='flex items-center gap-2'>
                  <Link
                    to='/about'
                    className={
                      location.pathname === '/about' ? 'text-amber-500' : ''
                    }
                  >
                    About
                  </Link>
                  <div className='h-[5px] w-[5px] rounded-full bg-[#F0B55B]'></div>
                </li>
                <li className='relative group'>
                  <Link
                    to='/adult-birthday'
                    className={
                      location.pathname === '/adult-birthday'
                        ? 'text-amber-500'
                        : ''
                    }
                  >
                    Activities
                  </Link>
                  <ul className='absolute top-full left-0 hidden group-hover:block bg-white shadow-lg py-8 mb-4 text-sm  rounded-md min-w-[300px] z-50'>
                    <li>
                      <Link
                        to='/adult-birthday'
                        className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2'
                      >
                        Adult Birthday
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/anniversary-decoration'
                        className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2 my-4'
                      >
                        Anniversay Decoration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/baby-shower'
                        className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2'
                      >
                        Baby Shower and Welcome Baby
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/kids-birthday'
                        className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2 my-4'
                      >
                        Kids Birthday
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/banquet-hall'
                        className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2'
                      >
                        Banquet Halls
                      </Link>
                    </li>
                    <li>
                      <li>
                        <Link
                          to='/just-married'
                          className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2 my-4'
                        >
                          Just Married
                        </Link>
                      </li>
                      <Link
                        to='/room-decoration'
                        className='block px-4 py-3 hover:bg-[#ED52DA] hover:text-amber-200 bg-zinc-100 mx-2'
                      >
                        Room Decoration
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to='/our-gallery'
                    className={
                      location.pathname === '/our-gallery'
                        ? 'text-amber-500'
                        : ''
                    }
                  >
                    Our Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className={
                      location.pathname === '/contact' ? 'text-amber-500' : ''
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right side (contact + CTA) */}
            <div className='flex items-center gap-4 md:gap-6'>
              <a href='tel:+91 9870576497'>
                <div className='hidden md:flex items-center gap-3'>
                  <span className='p-2 rounded-full bg-zinc-100'>
                    <FaPhone className='text-lg text-black' />
                  </span>

                  <span>
                    <p className='text-zinc-500 text-xs'>PHONE:</p>
                    <p className='text-xl text-blue-300'>+91 9870576497</p>
                  </span>
                </div>
              </a>
             <Link to='/contact'>
              <button className='flex items-center gap-1 bg-[#F0B55B] py-4 w-[180px] pl-10 z[0] text-sm text-white cursor-pointer'>
                Contact Me{' '}
                <MdOutlineArrowRightAlt className='text-xl mt-1 font-bold' />
              </button>
             </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='lg:hidden flex flex-col bg-white px-6 py-4 shadow-md w-[300px] absolute top-full left-0 z-[999]'>
              <Link
                to='/'
                className='py-2 font-bold'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <hr />
              <Link
                to='/about'
                className='py-2 font-bold'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <hr />
              <div className='py-2'>
                <details className='cursor-pointer'>
                  <summary className='py-1 font-bold'>Activities</summary>
                  <div className=' px-1 mt-2 flex flex-col gap-2 bg-zinc-200 py-4'>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/adult-birthday'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Adult Birthday
                    </Link>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/anniversary-decoration'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Anniversary Decoration
                    </Link>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/baby-shower'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Baby Shower And Welcome
                    </Link>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/kids-birthday'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Kids Birthday
                    </Link>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/banquet-hall'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Banquet Halls
                    </Link>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/just-married'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Just Married
                    </Link>
                    <Link
                      className='bg-white p-2 hover:text-white hover:bg-[#ED52DA]'
                      to='/room-decoration'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Room Decoration
                    </Link>
                  </div>
                </details>
              </div>
              <hr />
              <Link
                to='/our-gallery'
                className='py-2 font-bold'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Gallery
              </Link>
              <hr />
              <Link
                to='/contact'
                className='py-2 font-bold'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <hr />
            </div>
          )}
        </div>
      </header>
      <SecondNavbar />
    </>
  );
};

export default Navbar;
