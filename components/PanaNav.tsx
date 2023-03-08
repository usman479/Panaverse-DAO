import React from 'react'
import Image from 'next/image'
import panaLogo from "../public/images/panaverse-logo.webp"

const PanaNav = () => {
    return (
        <div className='flex h-24 w-full backdrop-blur-3xl bg-white/80 mt-0 px-6 items-center gap-4 sticky top-0 z-50'>
            <a href="#">
                <Image src={panaLogo} alt="logo" height={120} width={120} />
            </a>
            <ul className='relative flex flex-grow text-right justify-end gap-10 text-lg'>
                <a href="#" className='hover:text-blue-600'><li className='select-none'>Home</li></a>
                <li className='group '>
                    <div className='flex items-end cursor-pointer group-hover:text-blue-600'>
                        <span className='select-none'> Courses </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-6">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='sm:min-w-0 absolute right-0'>
                        <ul className='group-hover:max-h-max group-hover:py-2 max-h-0 overflow-hidden duration-200  shadow-md text-left min-w-max  bg-white text-xs sm:text-base md:text-lg'>
                            <a href="#"><li className='hover:bg-slate-200 py-2 px-1'>Web 3.0 and Metaverse Developer</li></a>
                            <a href="#"><li className='hover:bg-slate-200 py-2 px-1'>Cloud Native Computing</li></a>
                            <a href="#"><li className='hover:bg-slate-200 py-2 px-1'>Artificial Intelligence</li></a>
                            <a href="#"><li className='hover:bg-slate-200 py-2 px-1'>Ambient Computing and IoT</li></a>
                            <a href="#"><li className='hover:bg-slate-200 py-2 px-1'>Genomics and Bioinformatics</li></a>
                            <a href="#"><li className='hover:bg-slate-200 py-2 px-1'>Network Programmability and Automation</li></a>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PanaNav;