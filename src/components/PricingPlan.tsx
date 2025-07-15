'use client';

import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    title: 'BASIC',
    description: 'Pricing for cybersecurity services varies based on factors like business size, the number of endpoints, level of protection.',
    price: '',
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
    price: '',
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
    price: '',
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
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-4">Cybersecurity Pricing Plans</h2>
        <p className="text-gray-400 mb-8">
          We are a team of cybersecurity experts dedicated to protecting businesses from modern cyber threats. Our cutting-edge technology and proactive approach ensure your data and systems remain secure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-[1px] rounded-lg bg-gradient-to-r from-[#DE3A3A] to-[#DCBCBC] transition-transform duration-300 transform hover:scale-y-110"
            >
              <div
                className="bg-[#171717] p-6 rounded-lg shadow-md text-left flex flex-col gap-4 "
               
              >
                <h1 className="text-[#DE3A3A] text-[1.4rem] font-semibold text-center">{t.title}</h1>
                <p className="text-sm text-gray-300">"{t.review}"</p>
                <div>
                  <p className="font-extrabold text-[1rem] text-white">{t.name}</p>
                  <p className="text-[0.65rem] font-normal text-gray-400">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
