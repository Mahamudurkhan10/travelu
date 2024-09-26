'use client'
import React, {  useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const PopularTour = () => {
     const swiperRef = useRef(null);
     const foods = [
          {
               id:1,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg"
          },
          {
               id:2,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg"
          },
          {
               id:3,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg"
          },
          {
               id:4,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg"
          },
          {
               id:5,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg"
          },
     ]
     return (
          <div>
               <div className='bg-cover mt-5 bg-fixed bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/bP9jLhD/bgparallax-01-1.jpg')" }}>
                    <div className='h-[700px]'>
                         <div className='max-w-7xl mx-auto '>
                              <div className='pt-48   mx-auto '>
                                   {foods.length > 0 && (
                                        <Swiper
                                             ref={swiperRef}
                                             modules={[Navigation, Pagination, Autoplay]}
                                             autoplay={{ delay: 7000 }}
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
                                                            <Image width={500} height={500} src={food.image}></Image>
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