import React from 'react'

export default function ToursBanner() {
  return (
    <div>
       <div className='bg-cover  bg-fixed relative bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/FhFq5vn/bgparallax-06.jpg')" }}>
               <div className='absolute rounded-xl   inset-0 bg-black bg-opacity-30  transition-all duration-500'></div>
               <div className='h-[600px]'>
                    <div className='text-center text-white opacity-90 pt-52 space-y-4'>
                         <h1 className='text-7xl font-semibold'>Vacation in Europe
                        </h1>
                         <h1 className='text-5xl font-mono'> Italy, Rome, France, London, Milan, Venice</h1>
                    </div>
               </div>

          </div>
    </div>
  )
}
