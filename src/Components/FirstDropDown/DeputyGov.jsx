'use client'

import React from 'react'
import Image from 'next/image'
import hope from '../../Images/hope 9.jpg'

const DeputyGov = () => {
    return (
        <div className='flex mt-5 gap-1 '>
            <div className='w-[40%]'>
                <Image src={hope} alt='Governors Picture' className=' rounded-3xl w-[390px]' />
            </div>
            <div className='w-[60%]'>
                <h2 className='font-bold text-3xl'>Chinyere Ekomaru</h2>
                <p className='font-semibold text-[12px] italic'>Deputy Governor of IMO State</p>

                <p className='mt-2 text-[15px] italic'>
                    The Deputy Governor of Imo State is the political running-mate of the governor.
                    she serves as the second highest executive official after the governor.
                    On 15 January 2024, Chinyere Ekomaru was sworn in as Deputy Governor of Imo State.
                </p>

            </div>
        </div>
    )
}
export default DeputyGov