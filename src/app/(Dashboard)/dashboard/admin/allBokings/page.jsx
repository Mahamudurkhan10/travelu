'use client'
import useBokings from '@/Components/hooks/useBokings';
import axios from 'axios';
import { AlarmClock, Star, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';

const ALLBokings = () => {
     const [Bokings, refetch] = useBokings()
     const handleDelete = async (id) => {
          try {
               Swal.fire({ 
                   title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
               }).then((result) => {
                    if (result.isConfirmed) {
                         axios.delete(`https://travelu-beta.vercel.app/tours/api/tourBoking`,{
                              params:{id:id}
                         })
                              .then(res => {
                                   if (res.status === 200) {
                                        refetch()
                                        Swal.fire({
                                             title: "Deleted!",
                                             text: "Your bokings has been deleted.",
                                             icon: "success"
                                        });
                                   }

                              })

                    }
               });
          }   
          catch (error) {
               
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
               });
          }
     }
     return (
          <div>
          <div>
              <h1 className="text-4xl font-semibold text-center"> ALL Bokings </h1>
          </div>
         <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 pt-7 grid-cols-1">
              {
                   Bokings.map(tour => (  <div key={tour._id}>
                        <div className='border rounded-xl '>
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
                                  <div className='flex lg:flex-col md:flex-col justify-between'>
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

export default ALLBokings;