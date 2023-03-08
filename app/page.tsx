"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import { posts } from "./data"
import Link from 'next/link'
import MacNav from '@/components/MacNav'
import Hero from '@/components/Hero'
import EnrollSec from '@/components/EnrollSec'
import web3 from "../public/images/web3.webp"
import ai from "../public/images/ai.webp"
import ambient from "../public/images/ambient.webp"
import cloud from "../public/images/cloud.webp"
import genomics from "../public/images/genomics.webp"
import network from "../public/images/network.webp"
import outcomePoster from "../public/images/outcome-poster.webp"
import CourseIcon from '@/components/CourseIcon'
import { useState } from 'react';
import panaLogo from "../public/images/panaverse-logo.webp"

const inter = Inter({ subsets: ['latin'] })

const obj = [
  {
    title: "Web 3.0 (Blockchain) and Metaverse Specialization",
    desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    quat4: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    quat5: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
  },
  {
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    desc: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    quat4: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    quat5: "AI-361: Deep Learning and MLOps"
  },
  {
    title: "Ambient Computing and IoT Specialization",
    desc: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    quat4: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    quat5: "AC-361: Embedded Programming using C and Rust"
  },
  {
    title: "Cloud-Native Computing Specialization",
    desc: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. ",
    quat4: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    quat5: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform"
  },
  {
    title: "Genomics and Bioinformatics Specialization",
    desc: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    quat4: "Bio-351: Python for Biologists",
    quat5: "Bio-361: Bioinformatics with Python"
  },
  {
    title: "Network Programmability and Automation Specialization",
    desc: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    quat4: "NPA-351: CCNA 200-301 Certification",
    quat5: "NPA-361: Network Programmability and Automation"
  },
]

const courses = [
  {
    title: "Web 3.0 (Blockchain) and Metaverse Specialization",
    imgPath: web3
  },
  {
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    imgPath: ai
  },
  {
    title: "Ambient Computing and IoT Specialization",
    imgPath: ambient
  },
  {
    title: "Cloud-Native Computing Specialization",
    imgPath: cloud
  },
  {
    title: "Genomics and Bioinformatics Specialization",
    imgPath: genomics
  },
  {
    title: "Network Programmability and Automation Specialization",
    imgPath: network
  },
]

export default function Home() {

  const [ind, setInd] = useState(0);

  const handleInd = (id: number) => {
    setInd(prev => id);
  }


  return (
    <>
      <Hero />  
      <EnrollSec />
      <div className='px-4 mt-10'>
        <h2 className='font-bold text-5xl'>Specialized Tracks:</h2>
        <p className='text-lg mt-6 text-slate-700'>After completing the first three quarters the participants will select one or more
          specializations consisting of two courses each.</p>
      </div>
      <div className='flex flex-col md:flex-row w-full items-start px-4 md:h-auto gap-8 mt-10 scroll-mt-24' id='course-box'>
        <div className='md:basis-[65%] border p-5 rounded-md  shadow-lg'>
          <div>
            <h2 className='font-semibold text-blue-700 text-lg my-4'>Specialized Track</h2>
            <h2 className='font-bold text-3xl'>{obj[ind].title}</h2>
            <p className='text-base mt-6 text-slate-700'>{obj[ind].desc}</p>
            <button className='flex items-end border-[1px] border-blue-800 rounded-md px-4 py-2 font-semibold group hover:bg-gray-100 transition-all duration-300 mt-6'>
              <span className='h-6'> Learn More </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1 group-hover:translate-x-1 transition-all duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-4'>
            <div className='border border-slate-300  relative hover:shadow-lg shadow-blue-900 flex-1 flex-shrink-0 cursor-pointer select-none px-4 py-12 group'>
              <h2 className='font-semibold text-lg mb-5 group-hover:text-blue-600'>Quarter IV</h2>
              <p className='text-sm text-slate-700'>{obj[ind].quat4}</p>
              <h3 className='text-[11rem] font-black opacity-10 group-hover:text-blue-600 group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-200 absolute -top-10 right-[8%]'>4</h3>
            </div>
            <div className='border border-slate-300  relative hover:shadow-lg shadow-blue-900 flex-1 flex-shrink-0 cursor-pointer select-none px-4 py-12 group'>
              <h2 className='font-semibold text-lg mb-5 group-hover:text-blue-600'>Quarter V</h2>
              <p className='text-sm text-slate-700'>{obj[ind].quat5}</p>
              <h3 className='text-[11rem] font-black opacity-10 group-hover:text-blue-600 group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-200 absolute -top-10 right-[8%]'>5</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full md:basis-[35%] overflow-y-auto h-screen   scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-200 py-2'>
          {
            courses.map((item, index) => {
              return <CourseIcon title={item.title} imgPath={item.imgPath} index={index} active={ind === index} handleInd={handleInd} />
            })
          }
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-14 items-center px-4 w-full justify-between gap-y-2'>
        <Image src={outcomePoster} alt="outcome poster" className="min-w-[50%] order-last md:order-first" />
        <div className='flex flex-col min-w-[50%] '>
          <h2 className='text-5xl font-bold'>The Outcome for Participants of the Program</h2>
          <p className='text-lg mt-6 text-slate-700'>As A Graduate Of This Program, You Will Own Valuable Products Such As Full-Stack App Templates, AR And VR Experiences, And APIs That Are Marketed Globally By The Panaverse DAO. You Will Also Have The Opportunity To Offer Your Services At A Rate Of $50 Per Hour, Providing A Path To Financial Stability While Contributing To The Growth Of Pakistans Software Exports.</p>
          <div className='flex flex-wrap gap-y-8 mt-6'>
            <div className='flex items-center gap-x-3 basis-1/2 pr-2'>
              <div className='bg-gradient-to-b from from-cyan-300 to-blue-600 rounded-md rotate-45 p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white -rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className='font-semibold'>Product Ownership</p>
            </div>
            <div className='flex items-center gap-x-3 basis-1/2 pr-2'>
              <div className='bg-gradient-to-b from from-cyan-300 to-blue-600 rounded-md rotate-45 p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white -rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className='font-semibold'>Freelacing</p>
            </div>
            <div className='flex items-center gap-x-3 basis-1/2 pr-2'>
              <div className='bg-gradient-to-b from from-cyan-300 to-blue-600 rounded-md rotate-45 p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white -rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className='font-semibold'>Global Marketing by Panaverse DAO</p>
            </div>
            <div className='flex items-center gap-x-3 basis-1/2 pr-2'>
              <div className='bg-gradient-to-b from from-cyan-300 to-blue-600 rounded-md rotate-45 p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white -rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className='font-semibold'>Boosting Economy.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
