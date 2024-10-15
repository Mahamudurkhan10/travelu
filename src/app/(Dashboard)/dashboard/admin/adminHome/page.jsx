'use client'
import useUser from '@/Components/hooks/useUser';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AdminHome = () => {
     const [User,refetch] = useUser()
     return (
          <div>
               <div className=''>
                    <div className=" lg:flex lg:w-3/4 lg:flex-col  md:flex md:flex-col md:items-center xl:flex-row xl:justify-center lg:items-center mx-auto mt-12 border-yellow-100 border-2  p-4 lg:p-12 gap-5 ">
                         <div className="mb-4 md:mr-6 md:mb-0">
                              <Image
                                   className="h-56 w-full rounded-lg object-cover  md:w-56"
                                   src={User?.photo}
                                   width={100} 
                                   height={20}
                                   alt={User?.name}
                              />
                         </div>
                         <div className=''>
                              <h1 className="lg:text-4xl text-2xl font-bold text-warning text-center pt-3"> {User?.name}</h1>
                              <h1 className="lg:text-2xl text-xl flex items-center justify-center py-3 text-warning gap-2"> <Mail></Mail> {User?.email}</h1>
                              <h1 className="lg:text-4xl text-2xl font-semibold text-center pt-5 text-[#703bf7]"> {User?.role} </h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AdminHome;