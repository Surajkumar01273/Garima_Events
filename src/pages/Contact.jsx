import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vje8lpg', 'template_6kuh2ph', form.current, {
        publicKey: 'CWrh90LXLfGrQT-oK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Success message!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Email Not Send');
        }
      );
  };

  return (
    <>
      <div>
        <hero>
          <div
            className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
            style={{
              backgroundImage: "url('/ourgallery/ourgalleryhero.jpg')",
            }}
          >
            <div className='relative z-10 text-center text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>Contact</h1>
              <p className='text-sm md:text-base'>
                <span className='hover:underline cursor-pointer mr-6 font-bold'>
                  <Link to='/'>Home</Link>
                </span>
                <span className='mx-2 font-bold'>Contact</span>
              </p>
            </div>
          </div>
        </hero>

        {/* ************       Section 1        *********** */}

        <section className='w-full bg-white pt-30 pb-16'>
          <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 md:px-16 gap-16 md:gap-10 items-start'>
            {/* Left Side: Image and Contact Box */}
            <div className='md:relative px-2'>
              <img
                src='/contact-image/contact1.jpg' 
                alt='Contact background'
                className='w-full md:w-[500px] md:h-[500px] lg:w-full h-full hidden md:block object-cover rounded-md'
              />

              <div
                className='md:absolute md:top-12 md:left-60 lg:left-80 bg-black bg-opacity-90 text-white p-4 lg:p-10 h-[400px] md:w-[60%]'
                style={{
                  backgroundImage:
                    "url('/contact-image/contact-bg-img.jpg')",
                }}
              >
                <h2 className='text-2xl font-bold mb-6'>Contact Details</h2>

                <div className='space-y-10'>
                  <p>
                    <span className='font-semibold'>Office Address:</span>
                    <br />
                    Bhawani Enclave Sector 9, Gurugram 122001.
                  </p>
                  <p>
                    <span className='font-semibold'>Mail Us:</span>
                    <br />
                    info@garimaevents.com
                  </p>
                  <p>
                    <span className='font-semibold'>Telephone:</span>
                    <br />
                    <a href="tel:+91 9870576497">+91 9870576497</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}

            <div className='px-4 md:px-4 lg:px-20'>
              <p className='text-pink-600 uppercase tracking-wider font-semibold mb-2'>
                Get a Quote
              </p>
              <h2 className='text-2xl md:text-4xl font-bold mb-6 border-b pb-2'>
                Keep Get in Touch
              </h2>

              <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    name='first_name'
                    type='text'
                    placeholder='First Name'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                  <input
                    name='last_name'
                    type='text'
                    placeholder='Last Name'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    name='phone'
                    type='text'
                    placeholder='Phone Number'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    className='border border-gray-300 p-3 rounded-md w-full focus:outline-none'
                  />
                </div>
                <textarea
                  name='message'
                  rows='4'
                  placeholder='Message'
                  className='border border-gray-300 p-3 rounded-md w-full focus:outline-none '
                ></textarea>

                <button
                  type='submit'
                  className='bg-black text-white px-8 py-3 font-semibold rounded-md shadow-md border border-pink-500 hover:shadow-lg transition'
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </section>

        <section>
          <iframe
            title='Gurugram Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562997.0421775718!2d76.73217822804476!3d28.481993057245187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d183ec172b3d3%3A0xddd690bf98f2c6a4!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1721840037395!5m2!1sen!2sin'
            width='100%'
            height='400'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-xl'
          />
        </section>
      </div>
    </>
  );
}

export default Contact;
