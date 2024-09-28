'use client'
import React, {  useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { AlarmClock, AudioWaveform, Star } from 'lucide-react';

const PopularTour = () => {
     const swiperRef = useRef(null);
     const foods = [
          {
               id:1,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
               title:"Best of Canada Tours And Travel"
          },
          {
               id:2,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
                title:"Best of Canada Tours And Travel"
          },
          {
               id:3,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
                title:"Best of Canada Tours And Travel"
          },
          {
               id:4,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
                title:"Best of Canada Tours And Travel"
          },
          {
               id:5,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
                title:"Best of Canada Tours And Travel"
          },
     ]
     return (
          <div>
               <div className='bg-cover mt-5 bg-fixed bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/bP9jLhD/bgparallax-01-1.jpg')" }}>
                    <div className='h-[800px]'>
                         <div className='max-w-7xl pt-20   mx-auto '>
                               <div className='flex  justify-between'>
                                   <h1 className='flex items-center gap-4 text-white text-3xl font-semibold'> Popular Tour  <AudioWaveform className='font-bold' size={30} strokeWidth={1.5} /> </h1>
                                   <h1 className='btn border-b-4 text-white font-bold border-yellow-400 btn-outline'> ALL Tours </h1>
                               </div>
                              <div className=' pt-7 mx-auto '>
                                   {foods.length > 0 && (
                                        <Swiper
                                             ref={swiperRef}
                                             modules={[Navigation, Pagination, Autoplay]}
                                             // autoplay={{ delay: 7000 }}
                                             spaceBetween={20}

                                             pagination={{ clickable: true, type: 'custom' }}
                                             navigation={true}

                                             initialSlide={0}

                                             breakpoints={{
                                                  640: {
                                                       slidesPerView: 1,
                                                  },
                                                  768: {
                                                       slidesPerView: 2,
                                                  },
                                                  1024: {
                                                       slidesPerView: 3,
                                                  },
                                             }}
                                        >
                                             {foods.map((food) => (
                                                  <SwiperSlide key={food._id}>
                                                       <div className=''>
                                                            <Image width={500} height={500} src={food.image} alt='image'></Image>
                                                            <div className='bg-base-100 p-4 space-y-3 ' >
                                                              <h1 className='text-xl font-semibold'> {food.title} </h1>
                                                               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat odio voluptatibus nesciunt suscipit. </p>
                                                               <div className='divider'></div>
                                                                <div className='flex justify-between'>
                                                                   <h1 className='flex items-center gap-2'><AlarmClock /> 7 Days </h1>
                                                                   <h1>From </h1>
                                                                </div>
                                                                <div className='flex justify-between'>
                                                                  <h1 className='flex items-center gap-1 '> <Star className='text-yellow-500 ' size={20}/> <Star className='text-yellow-500 ' size={20}/><Star className='text-yellow-500 ' size={20}/><Star className='text-yellow-500 ' size={20}/><Star className='text-yellow-700 mr-1 ' size={20}/> (3 reviews) </h1>
                                                                  <h1 className='text-xl font-bold text-orange-500'> $ 1000 </h1>
                                                                </div>
                                                            </div>
                                                       </div>
                                                  </SwiperSlide>
                                             ))}
                                        </Swiper>
                                   )}


                              </div>

                         </div>
                    </div>
               </div>
               <div className='h-screen'>

               </div>
          </div>
     );
};

export default PopularTour;