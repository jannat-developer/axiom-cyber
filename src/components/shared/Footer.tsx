import Image from 'next/image';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { SlSocialFacebook } from 'react-icons/sl';
import { TbBrandTwitter } from 'react-icons/tb';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <div className='relative min-h-[350px]'>
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '400px',
                    height: '400px',
                    backgroundImage: "url('/images/footer-vector.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom right',
                    opacity: 1,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <div className='max-w-7xl mx-auto pt-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-8 items-center text-white'>
                    {/* left  */}
                    <div className='flex flex-col items-start gap-2'>
                        <div className=' '>
                            <Image
                                src={'/images/logo.png'}
                                alt="Logo"
                                width={120}
                                height={40}
                                className="h-auto w-auto"
                            />
                        </div>
                        <div className='text-white text-[1rem] font-normal text-start'>Stay secure with cutting-edge technology and 24/7 monitoring at a price that fits your needs.</div>
                        <div className='flex items-center gap-5'>
                            <div className='border border-white p-2 rounded-lg'><GrInstagram className='text-white' /></div>
                            <div className='border border-white p-2 rounded-lg'><SlSocialFacebook className='text-white' /></div>
                            <div className='border border-white p-2 rounded-lg'><TbBrandTwitter className='text-white' /></div>
                            <div className='border border-white p-2 rounded-lg'><AiOutlineYoutube className='text-white' /></div>
                        </div>
                    </div>

                    {/* center  */}
                    <div className='text-white'>
                        <h3 className='text-[21px] font-semibold mb-6'>Quick Links</h3>
                        <ul>
                            <li className='text-[1rem] font-normal mb-2'>Our Service</li>
                            <li className='text-[1rem] font-normal mb-2'>About Us</li>
                            <li className='text-[1rem] font-normal mb-2'>Pricing</li>
                            <li className='text-[1rem] font-normal mb-2'>Blog</li>
                            <li className='text-[1rem] font-normal mb-2'>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* right  */}
                    <div className='text-white'>
                        <h3 className='text-[21px] font-semibold mb-6'>Contact Us</h3>
                        <div className='flex gap-2 items-center  mb-2'>
                            <MdEmail className='text-white inline-block ' />
                            <p className='text-[1rem] font-normal'>hello@website.com</p>
                        </div>
                        <div className='flex gap-2 items-center mb-2'>
                            <FaLocationDot className='text-white inline-block ' />
                            <p className='text-[1rem] font-normal'>838 Cantt Sialkot, ENG</p>
                        </div>
                        <div className='flex gap-2 items-center mb-2'>
                            <BsFillTelephoneFill className='text-white inline-block' />
                            <p className='text-[1rem] font-normal'>+02 5421234560</p>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;