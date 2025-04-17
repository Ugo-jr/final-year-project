'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import pic1 from '../../Images/hope1.jpg'
import pic2 from '../../Images/hope2.jpg'
import pic4 from '../../Images/hope.jpg'
import pic5 from '../../Images/hope5.jpg'
import logo from '../../Images/imo2.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




function SectionOne() {
    return (
        <section className='flex gap-3 mt-2 z-0'>
            <div className='w-[80%] shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]'>
                <>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={pic4} alt='slider' className='w-screen h-[450px]' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={pic5} alt='slider' className='w-screen h-[450px]' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={pic2} alt='slider' className='w-screen h-[450px]' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={pic1} alt='slider' className='w-screen h-[450px]' />
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>

            <div className='w-[20%] flex flex-col gap-3'>
                <h3 className='bg-red-700 text-white text-center py-1 font-bold rounded-2xl cursor-default '>Download Link</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]  px-1 py-1 border-[2px] border-green-800 rounded-[5px] flex items-center gap-1'>
                        <Image src={logo} alt='logo' className='w-[30px] h-[30px] cursor-pointer'/>
                        <a href="/1999constitution.pdf" download><p className='font-bold text-[12px]'>The 1999 Constitution</p></a>
                    </li>
                    <li className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]  px-1 py-1 border-[2px] border-green-800 rounded-[5px] flex items-center gap-1'>
                        <Image src={logo} alt='logo' className='w-[30px] h-[30px] cursor-pointer'/>
                        <a href="/IMSUSIPA.pdf" download><p className='font-bold text-[12px]'>IMSG SIPA</p></a>
                    </li>
                    <li className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]  px-1 py-1 border-[2px] border-green-800 rounded-[5px] flex items-center gap-1'>
                        <Image src={logo} alt='logo' className='w-[30px] h-[30px] cursor-pointer'/>
                        <a href="/IMSGPPP.pdf" download><p className='font-bold text-[12px]'>IMSG PPP LAW</p></a>
                    </li>
                    <li className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]  px-1 py-1 border-[2px] border-green-800 rounded-[5px] flex items-center gap-1'>
                        <Image src={logo} alt='logo' className='w-[30px] h-[30px] cursor-pointer'/>
                        <a href="/IMSGProcurementLaw.pdf" download><p className='font-bold text-[12px]'>IMSG Procurement Law</p></a>
                    </li>
                    <li className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]  px-1 py-1 border-[2px] border-green-800 rounded-[5px] flex items-center gap-1'>
                        <Image src={logo} alt='logo' className='w-[30px] h-[30px] cursor-pointer'/>
                        <a href="/IMSGLawDebt2021.pdf" download><p className='font-bold text-[12px]'>IMSG Law Debt</p></a>
                    </li>
                    <li className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)]  px-1 py-1 border-[2px] border-green-800 rounded-[5px] flex items-center gap-1'>
                        <Image src={logo} alt='logo' className='w-[30px] h-[30px] cursor-pointer'/>
                        <a href="/IMSGPublicHealth.pdf" download><p className='font-bold text-[12px]'>IMSG Public Health Law</p></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SectionOne
