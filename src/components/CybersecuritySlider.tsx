'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaChevronRight } from "react-icons/fa";

const cards = [
  {
    title: 'Endpoint Security',
    description: 'Our Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
    icon: '🛡️',
  },
  {
    title: 'Cloud Security',
    description: 'Our Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
    icon: '☁️',
  },
  {
    title: 'Network Security',
    description: 'Our Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
    icon: '🌐',
  },
  {
    title: 'Data Protection',
    description: 'EOur Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
    icon: '🔐',
  },
];

export default function CybersecuritySlider() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-black text-white py-16">
      <div className="mb-20">
        <h2 className="text-[2rem] md:text-[3rem] text-white text-center mb-4">
          Our Cybersecurity Solutions
        </h2>
        <p className="text-[0.7rem] md:text-[1rem] text-[#D7D7D7] text-center max-w-xl mx-auto">
          Protect your business from cyber threats with our cutting-edge,
          AI-driven security solutions.
        </p>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
        modules={[Autoplay]}
        className="px-6 max-w-full mx-auto"
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gradient-to-b from-[#DE3A3A] to-[#E39090] rounded-[2rem] card-with-notch h-full p-[0.7px]">
              <div className="card-with-notch p-6 text-center transition bg-black">
                {/* <div className="text-4xl mb-4">{card.icon}</div> */}
                <h3 className="text-xl font-semibold text-left">{card.title}</h3>
                <p className="text-gray-400 mt-2 text-left">{card.description}</p>
                <div className='flex items-center justify-between mt-8'>
                  <div className='bg-[#FFC876] w-fit p-2 rounded-[10px]'>
                    <img src="/images/fi.png" alt="" />
                  </div>
                  <div className='flex items-center gap-6'>
                    <div className='uppercase'>Explore more</div>
                    <div><FaChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Slider Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className="w-2 h-2 rounded-full bg-gray-500 hover:bg-red-600 transition"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
