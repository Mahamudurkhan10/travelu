'use client'
import LatestArticle from '@/Components/ui/MainLayout/ContactUs/LatestArticle';
import axios from 'axios';
import { AlarmClock, Calendar, CalendarDays, LocateOffIcon, MapPin, MapPinned, Star } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const TourDetails = () => {
     const params = useParams()
    const session = useSession()
    const router = useRouter()
     const [tour, setTour] = useState()
     const [number, setNumber] = useState(1)
    console.log(session)
     const newPrice = tour?.price*number
     useEffect(() => {
          const fetchBlog = async () => {
               const res = await axios.get(`http://localhost:3000/tours/api/tourDetails/${params.id}`)

               setTour(res.data)
          }
          fetchBlog()
     }, [params.id])
    
     const handleSubmit = async (e) =>{
          e.preventDefault()
          setNumber(e.target.num.value)
          const book = {
               image: tour?.image,
               place: tour?.place,
               category:tour?.category,
               price:newPrice,
               person: number,
               description: tour?.description,
               email: session.data.user.email,
               userPhoto : session.data.user.image,
               reviews : tour?.reviews,
               title: tour?.title
               
          }
          console.log(book)
     }
     
     if(session.data === null){
          router.push('/')
     }
     return (
          <div>
               <div className=" max-w-7xl mx-auto mt-12 mb-24 ">
                    <div className="flex  gap-5 ">

                         <Image src={tour?.image} width={600} height={500} alt="main image" className="rounded-xl hover:shadow-2xl"></Image>
                         <div className=" p-7 border w-2/5 hover:shadow-2xl shadow-lg rounded-xl">
                           
                              <div className="flex text-xl font-semibold mb-2 justify-between" >
                                   <h1 className=""> {tour?.place} </h1>
                                   <h1 className=""> {tour?.category} </h1>
                              </div>
                              <h1 className="text-3xl font-semibold text-center"> {tour?.title} </h1>
                              <h1 className='flex justify-center p-3 items-center gap-1 '> <Star className='text-yellow-500 ' size={20} /> <Star className='text-yellow-500 ' size={20} /><Star className='text-yellow-500 ' size={20} /><Star className='text-yellow-500 ' size={20} /><Star className='text-yellow-700 mr-1 ' size={20} /> ( {tour?.reviews} reviews) </h1>
                              <h1 className="text-2xl font-bold text-warning text-center">${newPrice} <span className="text-lg font-semibold text-gray-400">/ per person</span> </h1>
                              <div className="py-3 space-y-5 ">
                                   <p className="font-semibold text-center ">{tour?.description}</p>
                                   <form onSubmit={handleSubmit} className="flex justify-between ">
                                         <div>
                                             <input    name="num" type="number" className="border py-2 rounded-xl border-warning p-1" required placeholder="Numbar of person" />
                                         </div>
                                         <div>
                                         <div><button type="submit"
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
                                                       Proceed Boking
                                                  </span >

                                             </button></div>
                                         </div>
                                   </form>
                                 <Link href={"/tours"} className=" px-6 uppercase btn btn-warning btn-outline"> go back</Link>
                                 <div className="divider"></div>
                                 <div className="flex gap-5 " >
                                    <h1 className="flex hover:text-warning items-center gap-2"> <AlarmClock></AlarmClock> 12 Days 11 Nights </h1>
                                    <h1 className="flex hover:text-warning items-center gap-2"> <CalendarDays /> Availability May 12 </h1>
                                    <h1 className="flex hover:text-warning font-semibold items-center gap-2"> <MapPinned></MapPinned> {tour?.place} </h1>
                                 </div>
                              </div>
                         </div>
                    </div>
               </div>
               <LatestArticle></LatestArticle>
          </div>
     );
};

export default TourDetails;