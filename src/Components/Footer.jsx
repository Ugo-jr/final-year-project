import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import imologo from '../Images/imo2.png'

const Footer = () => {
    return (
        <div className='border-[2px] h-[25vh] relative bg-white border-green-800 mt-3 flex flex-col items-center justify-center border-b-0 border-x-0'>
            <div className='items-center flex flex-col gap-1'>
                <ul className='flex items-center gap-2'>
                    <li className='p-4 bg-white rounded-full border-[2px]  border-green-800 '><FaFacebook className='text-green-800 text-2xl cursor-pointer' /></li>
                    <li className='p-4 bg-white rounded-full border-[2px]  border-green-800 '><FaSquareInstagram className='text-green-800 text-2xl cursor-pointer' /></li>
                    <li className='p-4 bg-white rounded-full border-[2px]  border-green-800 '><FaLinkedin className='text-green-800 text-2xl cursor-pointer' /></li>
                </ul>
                <h2 className='text-[12px] font-bold text-green-900'>Social Media Handles</h2>
            </div>
            <div className='flex items-center gap-1 absolute left-2 top-5 '>
                <a href="/"><Image src={imologo} alt='Logo' className='w-[60px] h-[60px] cursor-pointer' /></a>
                <div className='leading-none font-bold text-green-900 text-[13px] cursor-pointer'>
                    <p className=''>Imo State </p>
                    <p>Civil Serivce Commission</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
