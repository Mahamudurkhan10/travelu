'use client'
import React from 'react';
import useUser from '../hooks/useUser';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const DashboardNavbar = () => {
     // const session = useSession()
     // console.log(session)
     const [User] = useUser()
     return (
          <div className=" ">
               <div className="space-y-3">
                    <h1 className="text-3xl font-semibold">  User Dashboard  </h1>
                    <Link href="/dashboard/user/userHome" className="btn w-full text-warning font-bold"> User Home </Link>
                    <Link href="/dashboard/user/myBokings" className="btn w-full text-warning font-bold"> My Bokings </Link>
               </div>

               <ul className="w-full pt-12 mt-12" >
                    <div className='divider'></div>
                    <Link href="/" className="  btn  w-full "><li>Go Home</li></Link>
               </ul>
          </div>
     );
};

export default DashboardNavbar;