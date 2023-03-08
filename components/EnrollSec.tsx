import React from 'react'

const EnrollSec = () => {
  return (
    <div className="w-full mt-10 px-4">
        <div>
          <h2 className='font-semibold text-blue-700 text-lg my-4'>Program of Studies</h2>
          <h2 className='font-bold text-4xl whitespace-pre-line'>Core Courses<br />
            (Common in All Specializations)
          </h2>
          <p className='text-lg mt-6 text-slate-700'>Every participant of the program will start by completing the following three core courses.</p>
          <button className='select-none self-start text-white text-lg bg-blue-500 hover:bg-blue-600 font-semibold rounded-full px-8 py-3 mt-6 transition-all duration-200 hover:shadow-lg hover:scale-105'>Enroll Now</button>
        </div>

        {/* svg image of line */}
        {/* <div className='lg:-mt-56 md:-mt-14 hidden md:block -z-10 w-11/12 mx-5'>
          <svg className="h-full w-full " width="1071" height="470" viewBox="0 0 1071 470" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_0_1)"><path d="M27 332C75 367 186.8 433 250 417C329 397 348.5 294 470.5 270C592.5 246 682 329.5 776.5 209C871 88.5002 912 26.5002 1044 26.5002" stroke="url(#paint0_linear_0_1)" stroke-opacity="0.8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path></g><rect x="151.5" y="374.996" width="64" height="64" rx="20" fill="white"></rect><rect x="171.5" y="394.996" width="23" height="23" rx="10" fill="#C4C4C4"></rect><rect x="618.5" y="242.999" width="64" height="64" rx="20" fill="white"></rect><rect x="638.5" y="262.999" width="23" height="23" rx="10" fill="#C4C4C4"></rect><rect x="955" width="64" height="64" rx="20" fill="white"></rect><rect x="975" y="20" width="23" height="23" rx="10" fill="#C4C4C4"></rect><defs><filter id="filter0_d_0_1" x="0.499878" y="24.0002" width="1070" height="445.959" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="24"></feOffset><feGaussianBlur stdDeviation="12"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter><linearGradient id="paint0_linear_0_1" x1="535.5" y1="26.5002" x2="535.5" y2="419.459" gradientUnits="userSpaceOnUse"><stop stop-color="#00E5FF"></stop><stop offset="1" stop-color="#0B4DD0"></stop></linearGradient></defs></svg>
        </div> */}
        <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4 mt-10'>
          <div className='border border-slate-300  relative hover:shadow-lg shadow-blue-900 flex-1 flex-shrink-0 cursor-pointer select-none px-4 py-12 mx-4 md:mx-6 group'>
              <h2 className='font-semibold text-lg mb-5 group-hover:text-blue-600'>Quarter I</h2>
              <p className='text-sm text-slate-700'>CS-101:Object Oriented Programming using Typescript</p>
              <h3 className='text-[11rem] font-black opacity-10 group-hover:text-blue-600 group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-200 absolute -top-10 right-[8%]'>1</h3>
          </div>
          <div className='border border-slate-300  relative hover:shadow-lg shadow-blue-900 flex-1 cursor-pointer select-none px-4 py-12 mx-4 md:mx-6 group'>
              <h2 className='font-semibold text-lg mb-5 group-hover:text-blue-600'>Quarter II</h2>
              <p className='text-sm text-slate-700'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
              <h3 className='text-[11rem] font-black opacity-10 group-hover:text-blue-600 group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-200 absolute -top-10 right-[6%] '>2</h3>
          </div>
          <div className='border border-slate-300  relative hover:shadow-lg shadow-blue-900 flex-1 cursor-pointer select-none px-4 py-12 mx-4 md:mx-6 group'>
              <h2 className='font-semibold text-lg mb-5 group-hover:text-blue-600'>Quarter III</h2>
              <p className='text-sm text-slate-700'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
              <h3 className='text-[11rem] font-black opacity-10 group-hover:text-blue-600 group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-200 absolute -top-10 right-[6%]'>3</h3>
          </div>
        </div>
    </div>


    //     {/* <div className='bg-slate-200 mx-10 relative'>
    //       <div className='border-2 border-slate-600 w-[18%] absolute'>
    //           <h2 className='font-semibold text-lg mb-5'>Quarter I</h2>
    //           <p className='text-sm'>CS-101:Object Oriented Programming using Typescript</p>
    //           <h3 className='text-[11rem] font-black opacity-10 absolute -top-20 -right-3'>1</h3>
    //       </div>
    //       <div className='border-2 border-slate-600 w-[18%] absolute right-[50%]'>
    //           <h2 className='font-semibold text-lg mb-5'>Quarter II</h2>
    //           <p className='text-sm'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
    //           <h3 className='text-[11rem] font-black opacity-10 absolute -top-20 -right-3'>2</h3>
    //       </div>
    //       <div className='border-2 border-slate-600 w-[18%] absolute left-0'>
    //           <h2 className='font-semibold text-lg mb-5'>Quarter III</h2>
    //           <p className='text-sm'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
    //           <h3 className='text-[11rem] font-black opacity-10 absolute -top-20 -right-3'>3</h3>
    //       </div>
    //     </div> */}


    //   {/* <div  className='w-full h-screen  bg-fixed bg-cover  bg-[url("https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/Mount-Taranaki-volcano-in-New-Zealand.jpg")]'>
    //   <h1 className="text-3xl font-bold">Hello World</h1>
    // </div>
    //     <div className='w-full h-screen'>
    // </div> */}
  )
}

export default EnrollSec