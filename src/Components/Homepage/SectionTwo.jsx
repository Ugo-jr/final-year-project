'use client'

import React from 'react'
import Image from 'next/image'
import pic from '../../Images/appoinment.jpg'

const SectionTwo = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-bold text-green-900'>Welcome To Imo Civil Service Commission</h1>
            <div className='mt-8 flex gap-6'>
                <div className='w-fit'>
                    <Image src={pic} alt='Image' className='w-[800vw] rounded-2xl' />
                </div>
                <h3 className='italic text-[15px]'>
                    The Civil Service Commission was established under Section 197 of the 1999 constitution
                    of the Federal Republic of Nigeria, as a State Executive Body responsible for
                    Appointments, Promotions and Discipline, etc., of staff in the State Civil Service.
                    <p className='mt-5'>
                        The Commission consists of a Chairman and four full-time Commissioners appointed by
                        the State Governor and confirmed by the State House of  Assembly, for a consolidated
                        term of 5 years.
                    </p>
                </h3>
            </div>
        </div>
    )
}

export default SectionTwo
