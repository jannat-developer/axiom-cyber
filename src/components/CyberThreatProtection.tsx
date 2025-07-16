import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'AI-Powered Threat Detection',
    desc: 'Harness the power of AI to predict, detect, and respond to threats in real time.',
    picture: "/images/l1.png"
  },
  {
    title: '24/7 Security Monitoring',
    desc: 'Our experts monitor your systems around the clock.',
    picture: "/images/l2.png"
  },
  {
    title: 'Cloud-Native Protection',
    desc: 'Security built specifically for cloud infrastructures.',
    picture: "/images/l3.png"
  },
  {
    title: 'Enterprise-Grade Cyber Defense',
    desc: 'Robust and scalable protection for growing businesses.',
    picture: "/images/l4.png"
  },
];

export default function CyberThreatProtection() {
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

      <div className="bg-[#171717] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className='border border-[#DE3A3A] rounded-2xl '>
            <Image
              src="/images/cyber-city.png"
              width={200}
              height={300}
              alt="Cybersecurity Image"
              className="rounded-2xl w-full h-auto object-cover shadow-lg "
            />
          </div>
          <div>

            <h2 className="text-[2rem] md:text-[3rem] text-white text-left mb-4">
              Protecting From Modern Cyber Threats
            </h2>
            <p className="text-gray-400 mb-8">
              We are a team of cybersecurity experts dedicated to protecting businesses from modern cyber threats. Our cutting-edge technology and proactive approach ensure your data and systems remain secure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {features.map((item, index) => (
                <div key={index} className="bg-[#202122] p-5 rounded-xl transition">
                  <img src={item.picture} className='mb-4 ' alt="" />
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>



              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
