"use client"
import { Backpack } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';



import React from 'react';

const Navbar = () => {
     const session = useSession()
     // console.log(session);
     const pathName = usePathname()

     const navItems = <div className='flex text-lg flex-col lg:flex-row font-semibold gap-2 lg:gap-8 lg:space-x-9'>
          <Link href={'/'}  ><li className={pathName === '/' ? 'text-warning font-bold' : 'font-semibold'} >Home</li></Link>
          <Link href={'/destination'}><li className={pathName === '/destination' ? 'text-warning font-bold' : 'font-semibold'}> Destination </li></Link>
          <Link href={'/aboutUs'}><li className={pathName === '/aboutUs' ? 'text-warning font-bold' : 'font-semibold'}> About Us </li></Link>
          <Link href={'/tours'}><li className={pathName === '/tours' ? 'text-warning font-bold ' : 'font-semibold'}> Tours </li></Link>
          <Link href={'/blogs'}><li className={pathName === '/blogs' ? 'text-warning font-bold' : 'font-semibold'}> Blog </li></Link>
          <Link href={'/contactUs'}><li className={pathName === '/contactUs' ? 'text-warning font-bold' : 'font-semibold'}> Contact Us </li></Link>
         
     </div>
     return (
          <div>
               <div className="navbar fixed z-10  bg-base-100">
                    <div className="navbar-start px-4">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>

                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   {navItems}
                              </ul>
                         </div>
                         <a className="btn btn-ghost font-mono text-3xl"> <Backpack size={30} className='text-yellow-600' /> Travelu</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         {
                              !session.data ? <div className='lg:space-x-4 flex'>
                                   <Link href={'/login'}><button className='btn  btn-warning hover:text-white lg:btn-outline px-8'> Login </button></Link>
                                   <Link href={'/signUp'}><button className='btn hidden lg:block bg-warning hover:text-white hover:bg-warning text-white px-8'> SignUp </button></Link>
                              </div> : <div> <button onClick={() => signOut()} className='btn bg-warning text-white'> SignOut </button></div>
                         }

                    </div>
               </div>
          </div>
     );
};

export default Navbar;