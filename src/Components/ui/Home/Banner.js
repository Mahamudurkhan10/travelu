'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function Banner() {
     return (
          <Swiper
               pagination={{
                    dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
          >
               <SwiperSlide>

               </SwiperSlide>
               <SwiperSlide>

               </SwiperSlide>
               <SwiperSlide>
                    
               </SwiperSlide>
             
          </Swiper>
     )
}
