import SocialLogin from '@/Components/shared/SocialLogin';
import Link from 'next/link';

import React from 'react';

const SignUp = () => {
     const handleSignUp = async(e) =>{
          e.preventDefault()
          const email = e.target.email.value;
          const name = e.target.name.value;
          const password = e.target.password.value;
          const photo = e.target.photo.value;
          const res = await      
     }
     return (
          <div>
               <div className="flex justify-center items-center">
                    <div className="bg-white shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden">
                         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                              <h1 className="text-3xl text-center text-black font-medium">Sign Up Your Account</h1>
                              <div className=" flex flex-col items-center">
                                   <div className="w-full flex-1 mt-8">
                                        <form  action="">
                                             <div className="mx-auto max-w-xs ">
                                                  <div className='space-y-4 contact-input'>
                                                       <input type="text" className='border w-full p-2' name="name" placeholder="Your Name" />
                                                       <input name="photo"className='border w-full p-2' type="text" placeholder="Your PhotoURL" />
                                                      


                                                       <input type="email"className='border w-full p-2' required name="email" placeholder="Your Email" />
                                                       <input type="password"className='border w-full p-2' name="password" placeholder="Your Password" />
                                                       <button className="tracking-wide font-semibold bg-[#fabd68] text-black w-full py-4 rounded hover:bg-[#ffb144] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                                                            <svg
                                                                 className="w-6 h-6 -ml-2"
                                                                 fill="none"
                                                                 stroke="currentColor"
                                                                 strokeWidth="2"
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                            >
                                                                 <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                                 <circle cx="8.5" cy="7" r="4" />
                                                                 <path d="M20 8v6M23 11h-6" />
                                                            </svg>
                                                            <span className="ml-3">Sign Up</span>
                                                       </button>
                                                  </div>
                                                  <div className="mt-4 mb-8 border-b text-center">
                                                       <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">OR</div>
                                                  </div>
                                                  <div className="flex justify-center">
                                                       <SocialLogin></SocialLogin>
                                                  </div>
                                                  <div className='flex items-center justify-center gap-1 mt-6'>
                                                       <p className="text-gray-600 text-center">Already Have an Account?</p>
                                                       <Link href={'/login'} className="font-bold underline text-black" >Login</Link>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                         <div className="flex-1 bg-[#fbf7ed] text-center hidden lg:flex">
                              <div
                                   className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                                   style={{
                                        backgroundImage: `url('https://i.ibb.co.com/fSKztqf/Sign-up-cuate.png')`,
                                   }}
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;