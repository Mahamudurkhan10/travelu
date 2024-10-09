'use client'
import useUserBoking from '@/Components/hooks/useUserBoking';
import axios from 'axios';
import { AlarmClock, Delete, DeleteIcon, Link, Star, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const MyBoking = () => {
     const [Tours,refetch] =useUserBoking()
     const handleDelete = async(id) =>{
          try {
               const res = await axios.delete("http://localhost:3000/tours/api/tourBoking",{
                    params:{id:id}
               })
               if(res.status === 200){
                    refetch()
               }
          } catch (error) {
               console.log(error)
          }
     }
     return (
          <div>
                <div>
                    <h1 className="text-4xl font-semibold text-center"> My Bokings </h1>
                </div>
               <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 pt-7 grid-cols-1">
                    {
                         Tours.map(tour => (  <div key={tour._id}>
                              <div className=''>
                                   <Image width={500} className='rounded-xl' height={500} src={tour.image} alt='image'></Image>
                                   <div className='bg-base-100 rounded-b-xl p-4 space-y-3 '>
                                        <div className="flex justify-between">
                                             <h1 className='text-xl font-semibold'> {tour.title} </h1>
                                             <h1 className="text-xl font-semibold"> {tour.place} </h1>
                                        </div>
                                        <p> {tour.category} </p>
                                        <div className='divider'></div>
                                        <div className='flex justify-between'>
                                             <h1 className='flex items-center gap-2'><AlarmClock /> 7 Days </h1>
                                              <h1> Person {tour.person} </h1>
                                        </div>
                                        <div className='flex justify-between'>
                                             <h1 className='flex items-center gap-1'>
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-700 mr-1' size={20} /> ( {tour.reviews} reviews)
                                             </h1>
                                             <h1 className='text-xl font-bold text-orange-500'> $ {tour.price} </h1>

                                        </div>
                                        <div className="flex gap-4 items-center justify-around pt-2">
                                         <button onClick={()=>handleDelete(tour._id)} className="btn btn-warning text-red-700"><Trash2/></button>
                                         <button className="btn btn-warning  text-success font-bold"> Pay </button>
                                        </div>
                                   </div>
                              </div>
                         </div>) )
                    }
               </div>
          </div>
     );
};

export default MyBoking;