import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';

const Chat = () => {
  return (
    <>
      <div className='hidden md:block fixed bottom-0 md:bottom-20 md:right-2 z-50 w-full'>
        <div className='flex md:flex-col  md:gap-y-10 md:items-end justify-between md:justify-end'>
          <span className='bg-[#ED52DA] p-4 rounded-xl'>
            <a href='tel:+91 9870576497'>
              <FaPhone className='text-white text-2xl mt-[5px]' />
            </a>
          </span>

          <span className='bg-[#ED52DA] p-4 rounded-xl text-center'>
            <a href='tel:+91 9870576497'>
              <FaWhatsapp className='text-white text-3xl mt-[5px]' />
            </a>
          </span>
        </div>
      </div>

      <div className='md:hidden fixed bottom-0 md:bottom-20 md:right-2 z-50 w-full'>
        <div className='flex md:flex-col  md:gap-y-10 md:items-end justify-between md:justify-end'>
          <span className='bg-green-400 font-semibold text-center p-4 w-full right-0.5'>
            <a href='tel:+91 9870576497'>
                Whatsapp
            </a>
          </span>

          <span className='bg-[#F0B55B] p-4 text-center font-semibold w-full md:flex'>
            <a  href='tel:+91 9870576497'>
              Call Now
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Chat;
