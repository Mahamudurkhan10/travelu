'use client'

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { AlarmClock, AudioWaveform, Star } from 'lucide-react';
import { useRef ,useState,useEffect} from 'react';
import axios from 'axios';

const PopularTour = () => {
     const swiperRef = useRef()
    const [tours,setTours] = useState()
    useEffect(()=>{
          const fetchTours = async()=>{
               const res = await axios("http://localhost:3000/HomeApi/PopularTour")
               setTours(res.data)
          }
          fetchTours()
    },[])
      
     return (
          <div>
               <div className='bg-cover relative mt-5 bg-fixed bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/bP9jLhD/bgparallax-01-1.jpg')"}}>
               <div className='absolute rounded-xl  inset-0 bg-[#191919] bg-opacity-10 '></div>
                    <div className='h-[800px] '>
                         <div className='max-w-7xl pt-20   mx-auto '>
                               <div className='flex  justify-between'>
                                   <h1 className='flex items-center gap-4  text-white  text-3xl font-bold'> Popular Tour  <AudioWaveform className='font-bold' size={30} strokeWidth={1.5} /> </h1>
                                   <h1 className='text-white text-xl font-bold border-b-4 border-warning '> ALL Tours </h1>
                               </div>
                              <div className=' pt-7 mx-auto '>
                                   {tours?.length > 0 && (
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
                                             {tours.map((food) => (
                                                  <SwiperSlide key={food._id}>
                                                       <div className=''>
                                                            <Image width={500} className='rounded-xl' height={500} src={food.image} alt='image'></Image>
                                                            <div className='bg-base-100 rounded-b-xl p-4 space-y-3 ' >
                                                              <h1 className='text-xl font-semibold'> {food.title} </h1>
                                                               <p> {food.description.slice(0,90)}... </p>
                                                               <div className='divider'></div>
                                                                <div className='flex justify-between'>
                                                                   <h1 className='flex items-center gap-2'><AlarmClock /> 7 Days </h1>
                                                                   <h1>From </h1>
                                                                </div>
                                                                <div className='flex justify-between'>
                                                                  <h1 className='flex items-center gap-1 '> <Star className='text-yellow-500 ' size={20}/> <Star className='text-yellow-500 ' size={20}/><Star className='text-yellow-500 ' size={20}/><Star className='text-yellow-500 ' size={20}/><Star className='text-yellow-700 mr-1 ' size={20}/> ( {food.reviews} reviews) </h1>
                                                                  <h1 className='text-xl font-bold text-orange-500'> $ {food.price} </h1>
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
             
          </div>
     );
};

export default PopularTour;