'use client'
import useUsers from '@/Components/hooks/useUsers';
import axios from 'axios';
import { Mail, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';

const ALLUsers = () => {
     const [Users, refetch, loading] = useUsers()
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
                         axios.delete(`https://travelu-beta.vercel.app/dataBase/api/users`,{
                              params:{id:id}
                         })
                              .then(res => {
                                   if (res.status === 200) {
                                        refetch()
                                        Swal.fire({
                                             title: "Deleted!",
                                             text: "Your order has been deleted.",
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
          <div className='lg:pl-12'>
               <div className='grid md:grid-cols-3 gap-4  lg:grid-cols-4 grid-cols-1'>
                    {
                         Users?.map(User => <div key={User._id} className=' border-yellow-100 border-2  p-2'>
                              <div className="flex flex-col items-center   mx-auto mt-12  gap-5 ">
                                   <div className="mb-4 pt-3 md:mr-6 md:mb-0">
                                        <Image
                                             className="h-56 w-full rounded-lg object-cover  md:w-56"
                                             src={User?.photo}
                                             width={100}
                                             height={20}
                                             alt={User?.name}
                                        />
                                   </div>
                                   <div>
                                        <h1 className="text-3xl font-bold text-warning text-center pt-3"> {User?.name}</h1>
                                        <h1 className="text-xl flex items-center justify-center py-3 text-warning gap-2"> <Mail></Mail> {User?.email}</h1>
                                        <h1 className="text-4xl font-semibold text-center pb-3 text-[#703bf7]"> {User?.role} </h1>
                                   </div>
                                 
                              </div>
                              <div className=" pt-2 flex justify-end ">
                                         <button onClick={()=>handleDelete(User._id)} className="btn btn-warning text-red-700"><Trash2/></button>
                                         
                                        </div>

                         </div>)
                    }
               </div>
          </div>
     );
};

export default ALLUsers;