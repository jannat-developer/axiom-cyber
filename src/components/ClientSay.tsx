'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaChevronRight } from "react-icons/fa";
import { IoStar } from 'react-icons/io5';


const cards = [
    {
        title: 'Endpoint Security',
        description: 'Our Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
        icon: '🛡️',
        name: 'Miss Sammy Feeney',
        position: 'James R., IT Director'
    },
    {
        title: 'Cloud Security',
        description: 'Our Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
        icon: '☁️',
         name: 'Miss Sammy Feeney',
        position: 'James R., IT Director'
    },
    {
        title: 'Network Security',
        description: 'Our Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
        icon: '🌐',
         name: 'Miss Sammy Feeney',
        position: 'James R., IT Director'
    },
    {
        title: 'Data Protection',
        description: 'EOur Cloud Security solution protects your cloud environments with AI-driven threat detection, Zero Trust architecture, and real-time monitoring. Secure your data, Azure, Google Cloud, and more.',
        icon: '🔐',
         name: 'Miss Sammy Feeney',
        position: 'James R., IT Director'
    },
];


export default function ClientSay() {
    const swiperRef = useRef<any>(null);

    return (
        <section className='relative'>

            {/* top left  */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '600px',
                    height: '600px',
                    backgroundImage: "url('/images/Vector.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top left',
                    opacity: 1,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />


            {/* bottom right  */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '400px',
                    height: '400px',
                    backgroundImage: "url('/images/Vector1.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom right',
                    opacity: 1,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="bg-[#171717] text-white py-30 px-4">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-[2rem] md:text-[3rem] text-white text-center mb-12">
                        see What Our Clients Say
                    </h2>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                        modules={[Autoplay]}
                        className="px-6 max-w-full mx-auto"
                    >
                        {cards.map((card, idx) => (
                            <SwiperSlide key={idx}>

                                <div className=" p-6 text-center transition bg-black rounded-[1rem] border border-[#DE3A3A]">
                                    {/* <div className="text-4xl mb-4">{card.icon}</div> */}
                                    <h3 className="text-xl font-semibold text-left">{card.title}</h3>
                                    <p className="text-gray-400 mt-2 text-left">{card.description}</p>
                                    <div className='flex items-center justify-start gap-5 mt-8'>
                                        <div className=' '>
                                            <img src="/images/image.png" className='rounded-full' alt="" />
                                        </div>
                                        <div className='flex flex-col items-start gap-2'>
                                            <div className='text-white text-[18px] font-semibold text-start'>{card.name}</div>
                                            <div className='text-white text-[12px] font-normal text-start'>{card.position}</div>
                                            <div className='flex items-center gap-2'>
                                                <IoStar className='text-[#FFA41B]' />
                                                <IoStar className='text-[#FFA41B]' />
                                                <IoStar className='text-[#FFA41B]' />
                                                <IoStar className='text-[#FFA41B]' />
                                                <IoStar className='text-[#FFA41B]' />
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
                </div>
            </div>
        </section>
    );
}
