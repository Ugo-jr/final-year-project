'use client'


import React, { useState } from 'react'
import Image from 'next/image'
import one from '../Images/imo2.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import Link from 'next/link';





const Navbar = () => {
    const [home, SetHome] = useState(false)
    const [firstDropdown, setFirstDropdown] = useState(false)
    const [secondDropdown, setSecondDropdown] = useState(false)
    const [thirdDropdown, setThirdDropdown] = useState(false)

    const Home = () => {
        SetHome(!home)
        setFirstDropdown(false)
        setSecondDropdown(false)
        setThirdDropdown(false)
    }

    const dropOne = () => {
        SetHome(false)
        setFirstDropdown(!firstDropdown)
        setSecondDropdown(false)
        setThirdDropdown(false)
    }

    const dropTwo = () => {
        SetHome(false)
        setFirstDropdown(false)
        setSecondDropdown(!secondDropdown)
        setThirdDropdown(false)
    }

    const dropThree = () => {
        SetHome(false)
        setFirstDropdown(false)
        setSecondDropdown(false)
        setThirdDropdown(!thirdDropdown)
    }


    return (
        <div className='items-center justify-center flex gap-1 z-50'>
            <nav className='flex items-center justify-between w-[95vw]  bg-white px-6 h-15 border-[3px] rounded-[12px] my-1 border-green-800'>
                <div className='flex items-center gap-1 '>
                    <a href="/"><Image src={one} alt='Logo' className='w-[40px] h-[40px] cursor-pointer' /></a>
                    <div className='leading-none font-bold text-green-900 text-[13px] cursor-pointer'>
                        <p className=''>Imo State </p>
                        <p>Civil Serivce Commission</p>
                    </div>
                </div>

                <div className='relative'>
                    <ol className='flex items-center gap-4'>
                        <Link href='/'> <li className='cursor-pointer px-[8px] text-green-800 font-semibold sarri py-[2px] flex items-center gap-1' onClick={Home}>  Home </li></Link>
                        <li className='cursor-pointer px-[8px] text-green-800 font-semibold sarri py-[2px] flex items-center gap-1' onClick={dropOne}><p>Offices</p>{firstDropdown === true ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</li>
                        {firstDropdown === true ?
                            <ul className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)] absolute top-12 border-[3px] border-green-800 z-50 left-[82px] rounded-2xl bg-white text-[13px] p-3 flex font-bold flex-col gap-3 text-green-800'>
                                <Link href={'/Governor'}><li>The Governor</li></Link>
                                <Link href={'/DeputyGovernor'}><li>The Deputy Governor</li></Link>
                            </ul> : ""
                        }

                        <li className='cursor-pointer px-[8px] text-green-800 font-semibold sarri py-[2px] flex items-center gap-1' onClick={dropTwo}><p>Application Portal</p></li>
                        {/* {secondDropdown === true ?
                            <ul className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)] absolute top-12 border-[3px] border-green-800 z-50 right-12 rounded-2xl bg-white text-[13px] p-3 flex font-bold flex-col gap-3 text-green-800'>
                                <li className='cursor-pointer'>Head Of LG Administration Office</li>
                                <li className='cursor-pointer'>Agricultural And Natural Resource</li>
                                <li className='cursor-pointer'>Finance and Supplies Department</li>
                                <li className='cursor-pointer'>Primary Health Care Department</li>
                                <li className='cursor-pointer'>Audit Unit</li>
                            </ul> : ""
                        } */}

                        <li className='cursor-pointer px-[8px] text-green-800 font-semibold sarri py-[2px] flex items-center gap-1' onClick={dropThree}><p>Staffs</p>{thirdDropdown === true ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</li>
                        {thirdDropdown === true ?
                            <ul className='shadow-[5px_7px_30px_-5px_rgba(0,_0,_0,_0.51)] absolute top-12 border-[3px] border-green-800 z-50 right-[-20px] rounded-2xl bg-white text-[13px] p-3 flex font-bold flex-col gap-3 text-green-800'>
                                <li className='cursor-pointer'>Nominal Rolls</li>
                                <li className='cursor-pointer'>Senorite Rolls</li>
                            </ul> : ""
                        }
                    </ol>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
