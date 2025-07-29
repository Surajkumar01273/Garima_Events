import React, { useState, useRef } from 'react';
import {
  homefirstSection,
  homeHeroSection,
  homeSecondSection,
  republicDaySection,
  adultBarthdaysection,
  anniversarySection,
  babbyShowerSection,
  kidsBarthdaySection,
  banquetHallsSection,
  justMarriedSection,
  roomDecorationSection,
  reviews,
  services,
  faqData,
} from '../data';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {
  const form = useRef();
  const [current, setCurrent] = useState(0);
  const links = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaLinkedinIn />, label: 'Linkdin' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaYoutube />, label: 'Youtube' },
    { icon: <FaPinterestP />, label: 'Pinterest' },
  ];

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
    <div className='w-full mb-20'>

      {/* Hero Section */}

      <div className='px-2 md:px-4 lg:px-12 md:pt-6'>
        <hero className='w-full flex items-center justify-center mt-8 bg-gray-100 shadow-gray-700'>
          <div className='w-full'>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 1 },
              }}
              loop={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {homeHeroSection.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className='h-full rounded-md'>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='w-full h-[180px] md:h-[320px] lg:h-[500px] object-fit md:rounded-md'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </hero>

        {/* First Section Cards */}

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {homefirstSection.map((card, index) => (
            <SwiperSlide key={index}>
              <div className='bg-zinc-100 h-[300px] mt-10 md:mt-20 rounded-t-sm pt-1 px-1 hover:bg-[#ED52DA]'>
                <div className='flex flex-col h-full w-full justify-end items-center rounded-t-lg'>
                  <div className='rounded-t-lg mb-4'>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='w-[120px] h-[120px] object-cover mb-10 rounded-full'
                    />
                  </div>
                  <h3 className='text-center w-full hover:bg-white bg-[#ED52DA] mt-2 py-5 font-semibold'>
                    {card.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*  ***********       2nd  section     **********  */}

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 mt-14 mb-10'>
          {homeSecondSection.map((card, index) => (
            <div key={index} className='mb-4 rounded-lg'>
              <div>
                <img
                  src={card.image.src}
                  alt={card.title}
                  className='w-[400px] h-[400px] md:h-[450px] object-fit object-center rounded-lg'
                />
              </div>
            </div>
          ))}
        </section>

        {/*  *******    3rd Section     ************ */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Happy Republic Day
          </h2>
          <hr />
          <div className='mt-4 mb-8'>
            <img src='public/home-image/republicday.jpg' alt='' />
          </div>
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {republicDaySection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       4th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Adult Birthday
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {adultBarthdaysection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>

                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
        {/* ****************       5th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Anniversary Decoration
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {anniversarySection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='to:+91 9870576497'>
                        {' '}
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       6th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Baby Shower and Welcome Baby
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {babbyShowerSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       7th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Kids Birthday
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {kidsBarthdaySection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        {' '}
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       8th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Banquet Halls
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {banquetHallsSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'>
                        {' '}
                        <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
        {/* ****************       10th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Just Married
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {justMarriedSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'>
                        {' '}
                        <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                      </a>
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        {' '}
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>

        {/* ****************       11th Sectin         ******************  */}

        <section className='pb-6 px-2'>
          <h2 className='text-2xl md:text-3xl mb-2 font-semibold'>
            Room Decoration
          </h2>
          <hr className='mb-8' />
          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {roomDecorationSection.map((card, index) => (
                <SwiperSlide key={index} className='mb-4 shadow-2xl'>
                  <div>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-fit object-center'
                    />
                  </div>
                  <p className='text-center text-zinc-600 mt-4'>{card.title}</p>
                  <div className='flex justify-between p-4 mt-4'>
                    <span>
                      <a href='tel:+91 9870576497'></a>
                      <FaPhone className='text-[#ED52DA] text-2xl mt-[5px]' />
                    </span>
                    <span>
                      <a href='tel:+91 9870576497'>
                        <FaWhatsapp className='text-[#ED52DA] text-3xl mt-[5px]' />
                      </a>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
      </div>

      {/* **************         12th Section         ********** */}

      <section className="relative bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/home-image/garimabg-pic.jpg')]">
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/70 z-0' />

        {/* Content */}
        <div className='relative h-[500px] z-10 flex flex-col items-center justify-center px-4 text-white text-center'>
          <h1 className='text-lg md:text-5xl font-bold leading-snug mb-6'>
            We Provide Affordable Services
            <br />
            Save Time & Save Money.
          </h1>

          {/* Button and Contact */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
            {/* Contact Button */}
            <div>
              <Link to='/contact'>
                <button className='bg-pink-500 hover:bg-black transition duration-1000 text-white px-14 py-[22px] rounded font-bold shadow'>
                  CONTACT US
                </button>
              </Link>
            </div>

            {/* Phone Button */}
            <a href='tel:+91 9870576497'>
              <div className='flex items-center bg-white text-black px-4 py-3 rounded shadow gap-2'>
                <div className='bg-pink-500 text-white p-3 rounded-full text-xl'>
                  <FaPhone />
                </div>
                <span className='text-lg font-semibold'>+91 9870576497</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/*  ****************      13th Section        ************* */}

      <section className=''>
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-30  md:px-6 lg:px-16 py-12'>
          {/* Left Side: Image */}
          <div className=''>
            <img
              src={reviews[current].image}
              alt='Review'
              className='rounded-lg px-2 shadow-2xl lg:w-[500px] w-full h-[350px] lg:h-[600px]'
            />
          </div>

          {/* ***********      Right Side: Text Content        ************* */}

          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <h4 className='text-pink-500 uppercase tracking-wider font-bold text-xl mb-10 lg:mb-10 text-center lg:text-left'>
              Client Review
            </h4>
            <h2 className='text-3xl md:text-5xl text-zinc-800 font-bold'>
              What Our Client Say
            </h2>
            <hr className='mt-4 mb-12' />

            <div className='text-zinc-500 relative pl-4 md:pl-10 mb-4 md:mb-6'>
              <FaQuoteLeft className='absolute left-0 top-1 text-pink-200 text-xs md:text-3xl' />
              <p className='md:text-lg text-md ' style={{ wordSpacing: '5px' }}>
                {' '}
                {reviews[current].text}
              </p>
            </div>

            <h5 className='text-lg md:text-3xl mt-10 font-semibold'>
              {reviews[current].name}
            </h5>

            {/* Navigation Dots */}
            <div className='mt-4 md:mt-8 flex space-x-3 sticky'>
              {reviews.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-8 rounded-full cursor-pointer transition-all duration-300 ${
                    current === index ? 'bg-pink-500' : 'bg-black'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* *****************          14 Section  Welcome Section            ***************** */}

      <section className='border mx-2 rounded-md lg:mx-30 my-10'>
        <div className='text-center my-6'>
          <h2 className='text-2xl font-semibold md:text-4xl mb-4'>
            Welcome to Garima Events
          </h2>
          <p className='text-sm'>
            Your Premier Balloon Decoration Service in Gurgaon
          </p>
        </div>

        <div className='px-4 md:px-10 pb-10'>
          {services.map((service, index) => (
            <div key={index} className=''>
              <h2 className='text-xl font-semibold pt-5 pb-2'>
                {service.title}
              </h2>
              {service.points ? (
                <ul className='list-disc pl-8 pt-6 md:pt-2 space-y-1'>
                  {service.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* *********      Frequently asked Q. Section      ********** */}

      <section>
        <div className='mx-2 lg:mx-30 border p-6 rounded-xl mt-10 bg-white shadow'>
          <h2 className='text-3xl font-semibold text-center mb-6'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-6'>
            {faqData.map((data, index) => (
              <details key={index} className='border-b border-gray-300 pb-2'>
                <summary className='cursor-pointer text-md md:text-lg font-medium'>
                  {index + 1}. {data.question}
                </summary>
                <div className='mt-2 text-gray-600 pl2 md:pl-4'>
                  {/* Placeholder answer - update if you have real answers */}
                  {data.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 gap-30 items-start'>
          {/* Google Map */}

          <div>
            <iframe
              title='Gurgaon Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.272056221468!2d77.07220319321663!3d28.412800465653704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18df8e30f84f%3A0x84bd68b6ab94ad17!2sSector%2056%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1721838393492!5m2!1sen!2sin'
              width='100%'
              height='400'
              allowFullScreen=''
              loading='lazy'
              className='rounded-xl border'
            ></iframe>
          </div>

          {/* Contact Form */}

          <div>
            <h2 className='text-3xl md:text-3xl font-bold mb-8 text-center'>
              Get In <span className='text-yellow-500 underline'>Touch</span>{' '}
              With Us
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
            >
              <input
                name='first_name'
                type='text'
                placeholder='Enter First name*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <input
                name='last_name'
                type='text'
                placeholder='Enter Last Name*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <input
                name='email'
                type='email'
                placeholder='Enter your Email*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <input
                name='phone'
                type='tel'
                placeholder='Enter your Phone*'
                className='w-full border-b border-gray-300 focus:outline-none py-2 px-4'
              />
              <textarea
                name='message'
                rows='4'
                placeholder='Enter Your Message*'
                className='col-span-1 md:col-span-2 w-full border-b border-gray-300 focus:outline-none py-2 resize-none px-4'
              />
              <button
                type='submit'
                className='col-span-1 md:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-white py-2 font-semibold rounded transition'
              >
                Send us Message →
              </button>
            </form>
          </div>
        </div>

        {/* Statistics */}
        <div className='grid grid-cols-3 text-center gap-6 mt-30'>
          <div>
            <h3 className='text-3xl font-bold text-yellow-600'>12K</h3>
            <p className='text-gray-600'>Happy Clients</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-yellow-600'>2000</h3>
            <p className='text-gray-600'>Completed Projects</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-yellow-600'>300</h3>
            <p className='text-gray-600'>National Awards</p>
          </div>
        </div>
      </section>

      <section>
        <div className='w-full max-w-6xl mx-auto pt-10 flex flex-wrap gap-10 justify-between items-center text-gray-600 text-sm'>
          {links.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-2 px-4 ${
                index !== links.length - 1 ? 'border-r border-gray-400' : ''
              }`}
            >
              <Link to='#'>
                <span className='text-black text-lg'>{item.icon}</span>
              </Link>
              <Link to='#'>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
