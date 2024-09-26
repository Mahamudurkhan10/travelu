
import { Backpack } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
     const navItems = <div className='flex text-lg font-semibold gap-8 space-x-9'>
          <Link href={'/'}><li> Home </li></Link>
          <Link href={'/'}><li> Destination </li></Link>
          <Link href={'/'}><li> About Us </li></Link>
          <Link href={'/'}><li> Contact Us </li></Link>
          <Link href={'/'}><li> Blog </li></Link>
         
     </div>
     return (
          <div>
               <div className="navbar bg-base-100">
                    <div className="navbar-start">
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
                         <a className="btn btn-ghost font-bold text-3xl"> <Backpack size={30} className='text-yellow-600' /> Travelu</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className='space-x-4'>
                              <button className='btn btn-warning hover:text-white  btn-outline px-8'> Login </button>
                              <button className='btn bg-warning hover:text-white hover:bg-warning text-white px-8'> SignUp </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;