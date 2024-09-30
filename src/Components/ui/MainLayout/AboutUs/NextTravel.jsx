import { AudioWaveform } from 'lucide-react';
import React from 'react';

const NextTravel = () => {
     return (
        <div className='mt-12' >
            <div className='bg-cover  bg-fixed relative  bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/q7Scp3c/bgparallax-02.jpg')" }}>
               <div className='absolute rounded-xl  inset-0 bg-black bg-opacity-30  transition-all duration-500'></div>
               <div className='h-[600px]'>
                        <div className='text-center max-w-7xl  mx-auto text-white opacity-90 pt-48'>
                        <div className='flex items-center justify-center'>
                                   <AudioWaveform className='font-bold' size={50} strokeWidth={1.5} />
                              </div>
                         <h1 className='text-5xl font-semibold'>Get 10% Off on your Next Travel</h1>
                         <h1 className='text-2xl mt-5 font-mono'>Travel between 22 April to 21 May and get existing offers along with a sure 10% cash discount</h1>
                         <div className='flex  mt-5 justify-center items-center'>
                              <button
                                   class="relative flex items-center  px-6 py-3 overflow-hidden font-medium transition-all bg-[#e7a500] rounded-md group"
                              >
                                   <span
                                        class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#e7a500] rounded group-hover:-mr-4 group-hover:-mt-4"
                                   >
                                        <span
                                             class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                   </span>
                                   <span
                                        class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-white rounded group-hover:-ml-4 group-hover:-mb-4"
                                   >
                                        <span
                                             class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                   </span>
                                   <span
                                        class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-white rounded-md group-hover:translate-x-0"
                                   >

                                   </span>
                                   <span
                                        class="relative uppercase underline font-semibold w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-[#191919]"
                                   >
                                        Explore Tour
                                   </span >

                              </button>
                         </div>
                    </div>
               </div>

          </div>
        </div>
     );
};

export default NextTravel;