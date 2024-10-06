

import React from 'react'

export default function SharedBanner({title,description}) {
     return (
          <div>
               <div className='bg-cover bg-fixed relative  bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/9HnYtqD/bgparallax-05.jpg')" }}>
                    <div className='absolute rounded-xl  inset-0 bg-black bg-opacity-30  transition-all duration-500'></div>
                    <div className='h-[600px]'>
                         <div className='text-center text-white opacity-90 pt-52 space-y-4'>
                              <h1 className='text-7xl font-semibold'> {title} </h1>
                              <h1 className='text-4xl font-mono'>{description}</h1>
                         </div>
                    </div>
                    <div>
                         
                    </div>
               </div>
               <div>
                  
               </div>
          </div>
     )
}
