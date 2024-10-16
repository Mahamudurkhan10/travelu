'use client'
import SocialLogin from '@/Components/shared/SocialLogin';

import Link from 'next/link';
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation';
import useUser from '@/Components/hooks/useUser';



const Login = () => {
     const router = useRouter()
    
     const handleLogin =async(e)=>{
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          
          const resp = await signIn("credentials",{
               email,
               password,
               redirect:false
          });
          // console.log(resp)
          if(resp.ok){
              e.target.reset()
               router.push('/')
          }
     }
     return (
          <div>
                <div className="flex justify-center items-center mt-3 ">
                    <div className="bg-white shadow sm:rounded-lg flex flex-row-reverse justify-center flex-1 overflow-hidden">
                         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                              <h1 className="text-3xl text-center text-black font-medium"> Login Your Account</h1>
                              <div className=" flex flex-col items-center">
                                   <div className="w-full flex-1 mt-8">
                                        <form onSubmit={handleLogin}  action="">
                                             <div className="mx-auto max-w-xs ">
                                                  <div className='space-y-9 contact-input'>
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
                                                            <span className="ml-3">Login</span>
                                                       </button>
                                                  </div>
                                                  <div className="mt-4 mb-8 border-b text-center">
                                                       <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">OR</div>
                                                  </div>
                                                  <div className="flex justify-center">
                                                       <SocialLogin></SocialLogin>
                                                  </div>
                                                  <div className='flex items-center justify-center gap-1 mt-6'>
                                                       <p className="text-gray-600 text-center"> Don not Have any Account?</p>
                                                       <Link href={'/signUP'} className="font-bold underline text-black" >SignUp</Link>
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
                                        backgroundImage: `url('https://i.ibb.co.com/8BdgNjy/Tablet-login-cuate.png')`,
                                   }}
                              />
                         </div>
                    </div>
               </div>
           
          </div>
     );
};

export default Login;