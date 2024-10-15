import React from 'react'

export default function DestinationBanner() {
     return (
          <div className='bg-cover  bg-fixed relative mb-12 bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/FhFq5vn/bgparallax-06.jpg')" }}>
               <div className='absolute rounded-xl   inset-0 bg-black bg-opacity-30  transition-all duration-500'></div>
               <div className='h-[600px]'>
                    <div className='text-center text-white opacity-90 pt-52 space-y-4'>
                         <h1 className='lg:text-7xl text-5xl font-semibold'>Destinations</h1>
                         <h1 className='lg:text-4xl text-3xl font-mono'>Explore Tours By Destinations</h1>
                    </div>
               </div>

          </div>
     )
}
