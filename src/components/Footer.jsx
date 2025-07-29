import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='bg-[url(/public/footer_img/footer-bg.png)] bg-cover bg-center bg-black text-white pt-35 pb-16 md:pb-12 px-6'>
        <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Left: Logo and Info */}
          <div className=''>
            <div className='flex items-center mb-6'>
              <img
                src='public/footer_img/footer_img.png'
                alt='Profile'
                className=''
              />
            </div>
            <p className='text-sm text-stone-300 mb-6 leading-loose'>
              Balloon artists can create intricate sculptures using balloons,
              such as animals, characters, or themed designs.
            </p>
            <p className='text-sm text-stone-300 flex items-center gap-2 mb-6'>
              <span>
                <IoLocationOutline className='text-white text-lg' />
              </span>{' '}
              Bhawani Enclave Sector 9, Gurugram 122001
            </p>
            <a href='tel:+91 9870576497'>
              <p className='text-sm text-stone-300 flex items-center gap-2'>
                <span>
                  <FaPhone className='text-white text-sm mt-[5px]' />
                </span>{' '}
                +91 9870576497
              </p>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-2xl font-bold text-zinc-100 mb-4'>Quick Links</h3>
            <ul className='space-y-6 text-sm text-stone-300'>
              <li>
                <Link href='/' className='hover:text-yellow-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-yellow-300'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/our-gallery' className='hover:text-yellow-300'>
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link to='contact' className='hover:text-yellow-300'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities Section */}

          <div>
            <h3 className='text-2xl font-bold mb-4 text-zinc-100'>Activities</h3>
            <ul className='space-y-6 text-sm text-stone-300 flex flex-col'>
              <Link to='/adult-birthday' className='hover:text-amber-300'>
                <li>Adult Birthday</li>
              </Link>
              <Link
                to='/anniversary-decoration'
                className='hover:text-amber-300'
              >
                <li>Anniversary Decoration</li>
              </Link>
              <Link to='/baby-shower' className='hover:text-amber-300'>
                <li>Baby Shower & Welcome Baby</li>
              </Link>
              <Link to='/kids-birthday' className='hover:text-amber-300'>
                <li>Kids Birthday</li>
              </Link>
              <Link to='/banquet-hall' className='hover:text-amber-300'>
                <li>Banquet Halls</li>
              </Link>
              <Link to='/just-married' className='hover:text-amber-300'>
                <li>Just Married</li>
              </Link>
              <Link to='/room-decoration' className='hover:text-amber-300'>
                <li>Room Decoration</li>
              </Link>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-zinc-100'>Our Gallery</h3>
            <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
              <img
                src='public/footer_img/footer-left1.jpg'
                alt='Gallery 1'
                className='w-full h-30 object-cover'
              />
              <img
                src='public/footer_img/footer-left2.jpg'
                alt='Gallery 2'
                className='w-full h-30 object-cover'
              />
              <img
                src='public/footer_img/footer-left3.jpg'
                alt='Gallery 3'
                className='w-full h-30 object-cover'
              />
              <img
                src='public/footer_img/footer-left4.jpg'
                alt='Gallery 4'
                className='w-full h-30 object-cover'
              />
            </div>
          </div>
        </div>

        <div className='ml-10 text-sm text-gray-500 mt-10 border-gray-700 pt-4 pb-6'>
          © 2023 by Garima Events. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
