'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function Banner() {
     return (
          <div className=''>
               <Swiper
                    pagination={{
                         dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 5000 }}
                    className="mySwiper"
               >

                    <SwiperSlide className='bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: "url('https://i.ibb.co.com/Kxw5T24/pexels-andreimike-1271619.jpg')" }}>

                         <div className=' lg:max-w-7xl   text-center lg:text-start mx-auto h-[500px]  lg:h-[700px]'>
                              <div className='lg:pt-48 pt-24 lg:px-4 px-0'>
                                   <h1 className='text-4xl lg:text-8xl md:text-6xl font-semibold text-white'>Experience the Wonder </h1>
                                   <p className='text-xl lg:text-4xl md:text-3xl font-semibold text-white'> People don’t take trips, trips take People </p>

                                   <div className='flex items-center justify-center lg:justify-start py-8'>
                                       <Link href={'/tours'}> <button
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

                                        </button></Link>
                                   </div>
                              </div>

                         </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: "url('https://i.ibb.co.com/kJz96qP/bgparallax-01.jpg')" }}>

                         <div className='lg:max-w-7xl   text-center lg:text-start mx-auto h-[500px]  lg:h-[700px]'>
                              <div className='lg:pt-48 pt-24 lg:px-4 px-0'>
                                   <h1 className='lg:text-8xl text-4xl md:text-6xl  font-semibold text-white'>Experience the Wonder </h1>
                                   <p className=' text-2xl lg:text-4xl md:text-3xl font-semibold text-white'> People don’t take trips, trips take People </p>

                                   <div className='flex items-center justify-center lg:justify-start py-8'>
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
                    </SwiperSlide>
                    <SwiperSlide className='bg-no-repeat bg-cover bg-center opacity-95 ' style={{ backgroundImage: "url('https://i.ibb.co.com/1McgLWP/rest-sunshine-atoll-bungalow-holiday.jpg')" }}>

                         <div className='lg:max-w-7xl   text-center lg:text-start mx-auto h-[500px]  lg:h-[700px]'>
                              <div className='lg:pt-48 pt-24 lg:px-4 px-0'>
                                   <h1 className='lg:text-8xl text-4xl md:text-6xl  font-semibold text-white'>Experience the Wonder </h1>
                                   <p className='lg:text-4xl text-2xl md:text-3xl font-semibold text-white'> People don’t take trips, trips take People </p>

                                   <div className='flex items-center justify-center lg:justify-start py-8'>
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
                    </SwiperSlide>





               </Swiper>
          </div>
     )
}
