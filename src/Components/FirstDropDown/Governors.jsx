'use client'

import React from 'react'
import Image from 'next/image'
import hope from '../../Images/hope 8.jpg'

const governors = () => {
    return (
        <div className='flex mt-5 gap-2 '>
            <div className='w-[40%]'>
                <Image src={hope} alt='Governors Picture' className=' rounded-3xl ' />
            </div>
            <div className='w-[60%]'>
                <h2 className='font-bold text-3xl'>Hope Odidika Uzodimma</h2>
                <p className='font-semibold text-[12px] italic'>Governor of IMO State</p>

                <p className='mt-2 text-[15px] italic'>
                    Hope Odidika Uzodimma, born on December 12, 1958, in Omuma, Imo State,
                    is a Nigerian politician currently serving as the governor of Imo State since 2020.
                    Coming from an Igbo Catholic family, his father, Chief Michael Uzodimma, held
                    the chieftaincy title of Igwe of Ozuh Omuma, while his mother was Ezinne Rose Uzodimma (née Nneoha).
                    Uzodimma, a devout Catholic, is married to Chioma Uzodimma, and they have seven children together.
                </p>

            </div>
        </div>
    )
}
export default governors
