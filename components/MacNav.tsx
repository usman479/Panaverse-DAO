import React from 'react'
import Image from 'next/image'

const MacNav = () => {
  return (
    <div className='flex  shadow-md'>
        <div className='w-52'>
            <Image className='ml-auto' src="/images/mac-logo.png" alt="macdonald's logo" height={120} width={120}/>  
        </div>
        <div className='flex flex-col justify-between flex-1 mt-2 mr-20'>
            <div className='flex gap-4 items-baseline text-base'>
                    <a>Careers</a>
                    <a>Contact Us</a>
                    <a className='flex-grow text-right'>Search</a>
                    <a>Locate Me</a>
                    <button className='hover:scale-110 hover:shadow-lg bg-yellow-400 transition duration-500 delay-75 rounded-md px-6 py-2'>Order on McDelivery</button>
            </div>
                <ul className='flex gap-11 text-lg'>
                   <a href="#" className='py-3 flex-shrink-0 hover:border-red-600 border-b-[5px] border-white'> <li>Our Menu</li> </a>
                   <a href="#" className='py-3 flex-shrink-0 hover:border-red-600 border-b-[5px] border-white'> <li>About Our Food</li> </a>
                   <a href="#" className='py-3 flex-shrink-0 hover:border-red-600 border-b-[5px] border-white'> <li>Your Right To Know</li> </a>
                   <a href="#" className='py-3 flex-shrink-0 hover:border-red-600 border-b-[5px] border-white'> <li>Our App</li> </a>
                   <a href="#" className='py-3 flex-shrink-0 hover:border-red-600 border-b-[5px] border-white'> <li>Family</li> </a>
                   <a href="#" className='py-3 flex-shrink-0 hover:border-red-600 border-b-[5px] border-white'> <li>Trending Now</li> </a>
                </ul>
        </div>
    </div>
  )
}

export default MacNav