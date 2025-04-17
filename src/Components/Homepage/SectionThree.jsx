'use client'

import React from 'react'

const SectionThree = () => {
    return (
        <div className='mt-10 flex flex-col gap-1'>

            <div className='flex items-center justify-center gap-6 mt-3'>
                <div className='h-[50vh] w-[20vw] rounded-2xl border-2 p-2 flex flex-col border-green-900'>
                    <h2 className='text-2xl font-bold text-green-800'>Mission</h2>
                    <p className='mt-10 text-[12px] font-semibold italic'>
                        In pursuit of its stated vision, to meticulously be
                        guided by extant rules and regulations in the discharge of its core mandate,
                        at all times and to all persons,
                        fairly, honestly, equitably, transparently and meritoriously.
                    </p>
                </div>

                <div className='h-[50vh] w-[20vw] rounded-2xl border-2 p-2 flex flex-col border-green-900'>
                    <h2 className='text-2xl font-bold text-green-800'>Vision</h2>
                    <p className='mt-10 text-[12px] font-semibold italic'>
                        To build a highly focused, motivated, disciplined and committed Civil Service that is
                        totally dedicated to supporting the Government
                        in its developmental strides and the enthronement of good governance, across board.
                    </p>
                </div>

                <div className='h-[50vh] w-[20vw] rounded-2xl border-2 p-2 flex flex-col border-green-900'>
                    <h2 className='text-2xl font-bold text-green-800'>Our Resolve</h2>
                    <p className='mt-10 text-[12px] font-semibold italic'>
                        Public Service provides us the platform to leave a lasting legacy at
                        our duty posts and to make positive impacts on
                        our lives and those of future generations.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SectionThree
