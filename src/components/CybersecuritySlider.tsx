'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const cards = [
  {
    title: 'Endpoint Security',
    description: 'Protects devices with AI-based threat detection.',
    icon: '🛡️',
  },
  {
    title: 'Cloud Security',
    description: 'Secures cloud environments and data.',
    icon: '☁️',
  },
  {
    title: 'Network Security',
    description: 'Safeguards your networks with advanced firewalls.',
    icon: '🌐',
  },
  {
    title: 'Data Protection',
    description: 'Encrypts and protects sensitive information.',
    icon: '🔐',
  },
];

export default function CybersecuritySlider() {
  return (
    <section className="bg-black text-white py-16">
      <div className='mb-10'>
        <h2 className='text-[2rem] md:text-[3rem] text-white text-center'>Our Cybersecurity Solutions</h2>
        <p className='text-[0.7rem] md:text-[1rem] text-[#D7D7D7] text-center max-w-xl mx-auto'>Protect your business from cyber threats with our cutting-edge, AI-driven security solutions.</p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
        modules={[Autoplay]}
        className="px-6 max-w-6xl mx-auto"
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            {/* <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-400 mt-2">{card.description}</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                Explore More
              </button>
            </div> */}
            <div
              className="p-6 rounded-xl text-center hover:brightness-110 transition text-white"
              style={{
                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
              }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-400 mt-2">{card.description}</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                Explore More
              </button>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
