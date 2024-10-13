'use client'
import React from 'react';
import useUser from '../hooks/useUser';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Book, Settings, User2Icon, UserCheckIcon } from 'lucide-react';
import Image from 'next/image';

const DashboardNavbar = () => {


     const [User] = useUser()
     return (
          <div className=" ">
               {
                    User?.role === "admin" ? <div className="space-y-4">
                         <h1 className="text-3xl text-center text-white font-semibold flex items-center gap-2 "> <Image src={User?.photo || "https://i.ibb.co.com/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} width={40} height={20} alt="user photo" className=" rounded-full " ></Image>  Admin Dashboard  </h1>
                         <div className="divider" ></div>
                         <div className="flex flex-col gap-4">
                              <Link href="/dashboard/admin/adminHome" className="btn  text-warning  font-bold pr-10"> <User2Icon></User2Icon> Admin Home </Link>
                              <Link href="/dashboard/user/myBokings" className="btn  text-warning  font-bold pl-16 "> <Book></Book> ALL Users </Link>
                              <Link href="/dashboard/user/myBokings" className="btn  text-warning  font-bold pr-12 "> <Book></Book> ALL Bokings  </Link>
                              <Link href="/dashboard/user/myBokings" className="btn  text-warning  font-bold pr-16"> <Book></Book> ALL Tours  </Link>
                            

                         </div>
                    </div> : <div className="space-y-4">
                         <h1 className="text-3xl text-center text-white font-semibold flex items-center gap-2 "> <Image src={User?.photo || "https://i.ibb.co.com/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} width={40} height={20} alt="user photo" className=" rounded-full " ></Image>  User Dashboard  </h1>
                         <div className="divider" ></div>
                         <div className="flex flex-col gap-4">
                              <Link href="/dashboard/user/userHome" className="btn  text-warning  font-bold"> <UserCheckIcon></UserCheckIcon> User Home </Link>
                              <Link href="/dashboard/user/myBokings" className="btn  text-warning  font-bold"> <Book></Book> My Bokings </Link>
                              <Link href="/dashboard/user/userSetting" className=" btn text-warning text-lg font-bold"> <Settings></Settings>  Settings </Link>

                         </div>
                    </div>
               }



               <ul className="w-full pt-12 mt-12" >
                    <div className='divider'></div>
                    <Link href="/" className="  btn  w-full "><li>Go Home</li></Link>
               </ul>
          </div>
     );
};

export default DashboardNavbar;