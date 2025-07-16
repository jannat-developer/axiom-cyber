'use client';

import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const testimonials = [
  {
    title: 'BASIC',
    description: 'Pricing for cybersecurity services varies based on factors like business size, the number of endpoints, level of protection.',
    price: '99',
    feature: [
      'Real-time Threat Monitoring',
      'User Training Programs',
      'Email Security'
    ],
    name: 'Ephraim B.',
    review:
      'Website design and client portal were great! If you’re even remotely thinking about retirement planning, talk to SG. You’ll thank me.',
    avatar: '/assets/images/1.png',
    stars: 5,
    position: 'Customer Web Consultant',
  },
  {
    title: 'PREMIUM',
    description: 'Pricing for cybersecurity services varies based on factors like business size, the number of endpoints, level of protection.',
    price: '199',
    feature: [
      'Everything in Basic',
      'Everything in Basic + AI Threat Hunting',
      '24/7 Security Monitoring & Response',
      'Zero Trust Architecture'
    ],
    name: 'Emily L.',
    review:
      'I will be very secure in retirement thanks to SG. They were helpful, fast, and professional. Loved the entire process.',
    avatar: '/assets/images/2.png',
    stars: 5,
    position: 'Internal Implementation Officer',
  },
  {
    title: 'STANDARD',
    description: 'Pricing for cybersecurity services varies based on factors like business size, the number of endpoints, level of protection.',
    price: '399',
    feature: [
      'Everything in Standard',
      'Compliance Audits',
      'Advanced Threat Intelligence',
    ],
    name: 'Gina M.',
    review:
      'If you want real coaching, honest advice, and an effective retirement experience—make sure SG gets your call!',
    avatar: '/assets/images/3.png',
    stars: 5,
    position: 'Legacy Integration Producer',
  },
];

const PricingPlan = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[2rem] md:text-[3rem] text-white text-center mb-4">
          Cybersecurity Pricing Plan
        </h2>
        <p className="text-gray-400 mb-8">
          We are a team of cybersecurity experts dedicated to protecting businesses from modern cyber threats. Our cutting-edge technology and proactive approach ensure your data and systems remain secure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-[1px] rounded-lg bg-gradient-to-r from-[#DE3A3A] to-[#DCBCBC] transition-transform duration-300 transform hover:scale-y-110 "
            >
              <div
                className="bg-[#171717] p-6 rounded-lg shadow-md text-left flex flex-col gap-4 h-full"

              >
                <h1 className="text-[#DE3A3A] text-[1.4rem] font-semibold text-center">{t.title}</h1>
                <p className="text-sm text-gray-300 text-center">{t.description}</p>
                <div className='bg-black hover:bg-gradient-to-r from-[#DE3A3A] to-[#6C1307] rounded-lg'>
                  <h1 className='text-white  flex items-center justify-center'><span className='text-[38px] font-semibold'>$ {t.price} </span>  <span> </span>|  /per month</h1>
                </div>
                {/* Features */}
                <ul className="space-y-2 text-sm mb-4">
                  {t.feature.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 items-start ">
                      <IoMdCheckmark className="text-[#DE3A3A] text-xl mt-0.5 " />
                      <span className="text-[#FFFFFF]">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className='bg-[#DE3A3A] text-white text-[24px] font-bold rounded-lg py-2'>Purchase</button>
                <button className=' text-white text-[24px] font-bold rounded-lg py-2 border border-[#DE3A3A]'>Free trial</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
