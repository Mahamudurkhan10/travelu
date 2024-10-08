import React from 'react';

const userSetting = () => {
     const handleSettings = async (e) =>{
           e.preventDefault()
           const name = e.target.name.value;
           const photo = e.target.photo.value;
           const password = e.target.password.value;
           const user = {
               name,photo,password
           }
           console.log(user)
           try {
               
           } catch (error) {
               console.log(error)
               
           }
     }
     return (
          <div className="">
               <div className="flex justify-center   items-center">
                    <div className="bg-white shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden">
                         <div className="lg:w-1/2 xl:w-5/12 p-6 mt-24 sm:p-12 h-[700px] ">
                              <h1 className="text-3xl text-center text-warning font-semibold">Settigns</h1>
                              <div className=" flex flex-col items-center">
                                   <div className="w-full flex-1 mt-8">
                                        <form  action="">
                                             <div className="mx-auto max-w-xs ">
                                                  <div className=' space-y-6 contact-input'>
                                                       <input type="text" className='border rounded-xl  w-full p-2' name="name" placeholder="Your Name" />
                                                       <input name="photo" className='border rounded-xl w-full p-2' type="text" placeholder="Your PhotoURL" />



                                                       <label htmlFor="" className="text-warning"> Password 
                                                       <input type="password" className='border rounded-xl w-full p-2' required name="password" placeholder="Your Password" /></label>
                                                       <button className="tracking-wide font-semibold bg-[#fabd68] text-black w-full py-4 rounded hover:bg-[#ffb144] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                                                         
                                                            <span className="ml-3 font-mono "> Change </span>
                                                       </button>
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
                                        backgroundImage: `url('https://i.ibb.co.com/TtDnp82/2990009.jpg')`,
                                   }}
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default userSetting;