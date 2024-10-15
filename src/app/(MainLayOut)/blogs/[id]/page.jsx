"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React,{useState,useEffect} from 'react';

const BlogDetails = () => {
     const params = useParams();
     const [blog,setBlog] = useState()
    
     useEffect(()=>{
          const fetchBlog = async()=>{
               const res = await axios.get(`https://travelu-beta.vercel.app/blogs/blog/${params.id}`)
              
               setBlog(res.data)
          }
          fetchBlog()
     },[params.id])
     return (
          <div className=" max-w-7xl mx-auto px-0 lg:px-4 md:px-4 mt-12 mb-24 ">
             <div className="flex flex-col lg:flex-row md:flex-row gap-5 ">

               <Image src={blog?.mainImage} width={600} height={500} alt="main image" className="rounded-xl hover:shadow-2xl"></Image>
               <div className="p-16 border lg:w-2/3 md:w-2/3 hover:shadow-2xl shadow-lg rounded-xl">
               <h1 className="text-2xl font-semibold text-center"> {blog?.title} </h1>
                    <div className="flex justify-between py-5">
                    <div className="flex gap-3">
                         <Image src={blog?.userImage} width={40} height={40} alt={"image"} className="rounded-full"></Image>
                         <h1 className="text-xl font-semibold"> {blog?.name} </h1>
                    </div>
                    <h1 className=" text-xl font-semibold text-warning"> {blog?.date} </h1>
                    </div>
                    <div className="py-3 space-y-5 ">
                        <p className="text-xl ">{blog?.description}</p>
                         <div className="flex justify-center items-center ">
                              <Link href={"/blogs"} className=" px-6 uppercase btn btn-warning btn-outline"> go back</Link>
                         </div>
                    </div>
               </div>
             </div>
          </div>
     );
};

export default BlogDetails;