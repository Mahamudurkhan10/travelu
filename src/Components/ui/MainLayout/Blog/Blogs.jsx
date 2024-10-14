'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";


import React, { useState, useEffect } from "react";

const Blogs = () => {
     const [blogs, setBlogs] = useState([])
     // console.log(blogs);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const res = await axios.get("https://travelu-beta.vercel.app/blogs/api")
                    setBlogs(res.data.resp);
               } catch (error) {
                    console.log(error);
                   
               }
          }
          fetchData()

     }, [])
     return (
          <div className="">      
               <div className="grid lg:grid-cols-4 md:grid-cols-2  p-5  lg:p-5  grid-cols-1 gap-6  ">
                    {
                         blogs.map(b => <div key={b._id}>
                             <div className="space-y-2">
                              <Image src={b.mainImage} width={480} height={300} alt="image" className="rounded-xl hover:shadow-2xl shadow-xl  mt-12"></Image>
                              <div className="mt-4 flex flex-col lg:flex-row justify-between">
                                   <div className="flex  items-center gap-3">
                                        <Image src={b.userImage} width={30} height={40} className={"rounded-full"} alt="userImage"></Image>
                                        <h1 className="font-semibold text-xl"> {b.name} </h1>
                                   </div>
                                   <h1 className="text-xl font-semibold text-warning"> {b.date} </h1>
                              </div>
                              <div>
                                   <h1 className="text-2xl w-2/3 font-semibold"> {b.title} </h1>
                                   <p className="text py-4"> {b.description.slice(0,90)}... </p>
                                    <div className="">
                                    <Link href={`/blogs/${b._id}`}><h1 className="font-mono  mt-2 py-2 px-4  btn btn-warning btn-outline "> Read More .. </h1></Link>
                                    
                                    </div>
                              </div>
                             </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Blogs;
