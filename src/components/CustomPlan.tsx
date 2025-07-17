import React from 'react';

const CustomPlan = () => {
    return (
        <div className='relative min-h-[400px] '>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('/images/custom-bg.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            {/* Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
            <div className='max-w-7xl mx-auto'>
                <div className="relative z-10 max-w-[1680px] mx-auto px-4 md:px-8 py-30 ">
                    <h2 className="text-[2rem] md:text-[3rem] text-white text-left mb-6">
                        Don’t wait for a cyberattack—protect <br /> your business today!
                    </h2>
                    <button className='bg-[#DE3A3A] text-white text-[1rem] font-bold rounded-lg py-2 px-4 uppercase'>Get a custom plan</button>

                </div>
            </div>
        </div>
    );
};

export default CustomPlan;