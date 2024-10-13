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
                    <div className="lg:flex lg:w-1/2 mx-auto mt-12 border-yellow-100 border-2  p-12 gap-5 ">
                         <div className="mb-4 md:mr-6 md:mb-0">
                              <Image
                                   className="h-56 w-full rounded-lg object-cover  md:w-56"
                                   src={User?.photo}
                                   width={100} 
                                   height={20}
                                   alt={User?.name}
                              />
                         </div>
                         <div>
                              <h1 className="text-4xl font-bold text-warning text-center pt-3"> {User?.name}</h1>
                              <h1 className="text-2xl flex items-center justify-center py-3 text-warning gap-2"> <Mail></Mail> {User?.email}</h1>
                              <h1 className="text-4xl font-semibold text-center pt-5 text-[#703bf7]"> {User?.role} </h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AdminHome;