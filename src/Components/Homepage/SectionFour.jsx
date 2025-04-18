'use client'

import React from 'react'
import { ImProfile } from "react-icons/im";
import { RiUserCommunityFill } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";

const SectionFour = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-bold text-green-800'>Our Core Mandates</h1>
            <p className='italic font-medium'>
                Ensuring Fair Recruitment, Merit-Based Promotions, and Just Resolution
                of Disciplinary Cases<br /> in the  Imo State Civil Service.
            </p>

            <div className='flex items-center justify-center mt-6 gap-3'>
                <div className='border-[2px] border-green-900 h-[40vh] w-fit rounded-2xl flex flex-col gap-3 px-2'>
                    <div className='p-4 bg-white rounded-full border-[2px] w-fit mt-6 border-green-800'><ImProfile className='text-green-800 text-2xl cursor-pointer' /></div>
                    <h3 className='text-[15px] font-bold'>Recruitments into the State Civil Service</h3>
                    <p>
                        Recruiting talented and dedicated individuals is essential to the growth and efficiency of the State Civil
                        Service.
                    </p>
                </div>

                <div className='border-[2px] border-green-900 h-[40vh] w-fit rounded-2xl flex flex-col gap-3 px-2'>
                    <div className='p-4 bg-white rounded-full border-[2px] w-fit mt-6 border-green-800'><RiUserCommunityFill className='text-green-800 text-2xl cursor-pointer' /></div>
                    <h3 className='text-[15px] font-bold'>Promotion Of Staff In The Service</h3>
                    <p>
                        The State Civil Service is committed to recognizing and rewarding excellence among its staff.
                        Promotions are a key aspect
                        of career development, reflecting the dedication, hard work, and achievements of our employees.
                    </p>
                </div>

                <div className='border-[2px] border-green-900 h-[40vh] w-fit rounded-2xl flex flex-col gap-3 px-2'>
                    <div className='p-4 bg-white rounded-full border-[2px] w-fit mt-6 border-green-800'><GoShieldLock className='text-green-800 text-2xl cursor-pointer' /></div>
                    <h3 className='text-[15px] font-bold'>Disciplinary cases and appeals</h3>
                    <p>
                        Maintaining discipline within the State Civil Service is vital
                        to upholding the integrity and professionalism of our workforce.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default SectionFour
