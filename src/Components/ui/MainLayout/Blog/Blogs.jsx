'use client'
import axios from "axios";


import React, { useState, useEffect } from "react";

const Blogs = () => {
     const [blogs, setBlogs] = useState([])
     console.log(blogs);
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const res = await axios.get("http://localhost:3000/blogs/api")
                    setBlogs(res.data.resp);
               } catch (error) {
                    console.log(error);
                   
               }
          }
          fetchData()

     }, [])
     return (
          <div>
             
               <h1>Blogs</h1>
               
               <div>
                    {
                         blogs.map(b => <div key={b._id}>
                             <div>
                              
                             </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Blogs;
