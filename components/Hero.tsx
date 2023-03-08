import React from 'react'
import Image from 'next/image'
import heroPoster from "../public/images/hero-poster.webp"

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-max justify-between items-center  px-4'>
        <div className='flex-1 min-w-[50%]  pt-14 flex flex-col justify-evenly'>
            <h2 className='font-semibold text-blue-700 text-lg my-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h2>
            <h2 className='font-bold text-5xl'>Certified Web 3.0 and Metaverse Developer</h2>
            <p className='text-lg mt-6 text-slate-700'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            <p className='text-lg mt-6 text-slate-700'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
            <button className='select-none self-start text-white text-lg bg-blue-500 hover:bg-blue-600 font-semibold rounded-full px-8 py-3 mt-6 transition-all duration-200 hover:shadow-lg hover:scale-105'>Learn More</button>
        </div>
        <Image className='min-w-[50%]' src={heroPoster} alt="hero image"/>
    </div>
  )
}

export default Hero