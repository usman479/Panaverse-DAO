import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

type Props = { title: string, imgPath: StaticImageData, index: number,active:boolean,handleInd:(id:number) => void }

const CourseIcon = ({ title, imgPath, index,active,handleInd }:Props) => {
    
    const status = active && "sel";
    
    return (
        <>
        <a href="#course-box">
            <div className='flex h-24 group space-x-5 cursor-pointer' onClick={() => handleInd(index)}>
                <div className="bg-gradient-to-b from-cyan-300 to-blue-500 basis-[35%] flex-shrink-0 rounded-md">
                    <Image src={imgPath} alt="web3 and metaverse" className={'w-full h-full object-cover rounded-md group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all ' + status} />
                </div>
                <div className='my-auto'>
                    <h2 className='font-semibold text-blue-700 text-sm'>Specialized Track</h2>
                    <p className='font-bold'>{title}</p>
                </div>
            </div>
            <div className="w-full border-b border-slate-200 my-5"></div>
        </a>
        </>
    )
}

export default CourseIcon