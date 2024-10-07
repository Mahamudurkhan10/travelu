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
          <div>
               <div>
                    <h1 className="text-3xl font-semibold">  User Dashboard  </h1>
                     
               </div>
               <ul>
                    <Link href="/" className="btn btn-warning w-full text-white"><li>Go Home</li></Link>
               </ul>
          </div>
     );
};

export default DashboardNavbar;