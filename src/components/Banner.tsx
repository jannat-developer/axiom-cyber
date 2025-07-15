// 'use client';

import Image from 'next/image';
import React from 'react';


export default function Banner() {
    return (
        <div className="relative font-sans overflow-hidden">
            {/* ✅ Top-right Background Decoration */}

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '600px',
                    height: '600px',
                    backgroundImage: "url('/images/banner.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top right',
                    opacity: 1,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="relative z-10 max-w-[1680px] mx-auto px-4 md:px-8 py-30">
                {/* Content */}
                <div className="text-center md:text-left md:max-w-2/3">
                    <span
                        className="inline-block rounded-lg mb-4 p-[1px]"
                        style={{
                            background: 'linear-gradient(90deg, #DE3A3A, #E39090)',
                        }}
                    >
                        <span className="block bg-black text-white text-xs px-3 py-1 rounded-lg">
                            Your trusted cybersecurity partner
                        </span>
                    </span>

                    <h1 className="text-3xl md:text-[3.5rem] font-bold mb-6 text-white">
                        Comprehensive <span className="text-[#DE3A3A]">Cybersecurity</span>{' '}
                        Strategies for Growth and Resilience
                    </h1>

                    <p className="text-gray-300 mb-8">
                        Unlock your business&apos;s full potential with our comprehensive
                        cybersecurity strategies. Safeguard your growth and resilience in
                        the digital age.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white text-[1rem] px-6 py-3 rounded">
                            LEARN MORE
                        </button>
                        <button className="border text-[1rem] border-[#DE3A3A] px-6 py-3 rounded  text-white">
                            TALK WITH US
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}