'use client'
import useUser from '@/Components/hooks/useUser';
import axios from 'axios';
import { AlarmClock, Edit, Plus, Star, Torus, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ALLTours = () => {
     const session = useSession()
     const [User, refetch] = useUser()
     console.log(session)
     const [tours, setTours] = useState();
     const [selectedPlace, setSelectedPlace] = useState('');
     const [selectedSearch, setSelectedSearch] = useState('');

     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
     const [limit, setLimit] = useState(9);
     const [loading, setLoading] = useState(true)
     useEffect(() => {
          const fetchTours = async () => {

               try {
                    const res = await axios.get('https://travelu-beta.vercel.app/tours/api/getApi', {
                         params: { place: selectedPlace, search: selectedSearch, limit, page }

                    });
                    setTours(res.data.tours);
                    setTotalPages(res.data.totalPages)
               } catch (error) {
                    console.error("Error fetching tours:", error);
               }
               setLoading(false)

          };
          fetchTours();
     }, [selectedPlace, selectedSearch, page, limit]);

     const handleNextPage = () => {

          if (page < totalPages) {
               setPage(page + 1);
          }
     };

     const handlePreviousPage = () => {

          if (page > 1) {
               setPage(page - 1);
          }
     };
     const hanldeChange = (e) => {
          e.preventDefault();
          setSelectedPlace(e.target.value);
          setPage(1)
     };
     const handleSearch = (e) => {
          e.preventDefault();
          console.log(e.target.value)
          setSelectedSearch(e.target.value);
          setPage(1)
     };
     const handleDelete = async (id) => {
          try {
               Swal.fire({ 
                   title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
               }).then((result) => {
                    if (result.isConfirmed) {
                         axios.delete(`https://travelu-beta.vercel.app/tours/api/getApi`,{
                              params:{id:id}
                         })
                              .then(res => {
                                   if (res.status === 200) {
                                        window.history.go(0);
                                        Swal.fire({
                                             title: "Deleted!",
                                             text: "Your bokings has been deleted.",
                                             icon: "success"
                                        });
                                   }

                              })

                    }
               });
          }   
          catch (error) {
               console.log(error);
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
               });
          }
     }

     if (loading) {
          return (
               <div className="text-center">
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                    <span className="loading loading-spinner text-info"></span>
                    <span className="loading loading-spinner text-success"></span>
                    <span className="loading loading-spinner text-warning"></span>
                    <span className="loading loading-spinner text-error"></span>
               </div>
          )

     }
     return (
          <div className="p-3">
               <div>
                    <h1 className="text-4xl font-semibold text-center"> ALL Bokings </h1>
               </div>
               <div>

               </div>
               <div className="grid  lg:grid-cols-3 xl:grid-cols-5  xl:items-center lg:gap-12 gap-2 mt-3">
                    <div className="p-4 lg:col-span-1 xl:col-span-2  xl:flex grid grid-cols-2 lg:grid-cols-3 gap-3 ">
                         {["", "Rome", "Italy", "France", "Venice", "Milan", "London"].map((place) => (
                              <button
                                   key={place}
                                   onClick={hanldeChange}
                                   value={place}
                                   className={` ${selectedPlace === place ? 'btn btn-success' : 'btn btn-warning btn-outline'}`}
                              >
                                   {place || "ALL"}
                              </button>
                         ))}
                    </div>
                    <div className='xl:col-span-1 xl:block lg:hidden'>

                    </div>
                    <div className="lg:col-span-1 xl:col-span-1  lg:pt-4 pt-0  ">
                         <form className="relative border  border-warning  rounded-xl text-gray-600">
                              <input
                                   type="search"
                                   onChange={handleSearch}
                                   value={selectedSearch}
                                   placeholder="Search"
                                   className="bg-white h-10 px-5 pr-10 rounded-full w-full p-5 text-sm py-3  focus:outline-none"
                              />
                              <div className="absolute  right-0 top-0 mt-3 ">
                                   <svg
                                        className="h-4 w-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 56.966 56.966"
                                        width="512px"
                                        height="512px"
                                   >
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                   </svg>
                              </div>
                         </form>
                    </div>
                    
                    <div className="lg:col-span-1 xl:col-span-1  lg:pt-4 pt-0 ">
                         <div className='border border-yellow-500'>
                              <Link href={'/'} className='flex items-center gap-1 text-warning font-semibold justify-center text-xl'> <Plus></Plus> Create Tour </Link>
                         </div>
                    </div>
               </div>
               <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-3 lg:pt-0  lg:gap-3 gap-5">
                    {tours?.map((tour) => (
                         <div key={tour._id} className='border rounded-xl'>
                              <div className=''>
                                   <Image width={500} className='rounded-xl' height={500} src={tour.image} alt='image'></Image>
                                   <div className='bg-base-100 rounded-b-xl p-4 space-y-3 '>
                                        <div className="flex justify-between">
                                             <h1 className='text-xl font-semibold'> {tour.title.slice(0,20)}.. </h1>
                                             <h1 className="text-xl font-semibold"> {tour.place} </h1>
                                        </div>
                                        <p> {tour.category} </p>
                                        <div className='divider'></div>
                                        <div className='flex justify-between'>
                                             <h1 className='flex items-center gap-2'><AlarmClock /> 7 Days </h1>
                                             <h1>From </h1>
                                        </div>
                                        <div className='flex md:flex-col  justify-between'>
                                             <h1 className='flex md:text-[13px] items-center gap-1'>
                                                  <Star className='text-yellow-500'  />
                                                  <Star className='text-yellow-500'  />
                                                  <Star className='text-yellow-500'  />
                                                  <Star className='text-yellow-500'  />
                                                  <Star className='text-yellow-700 mr-1 '  /> 
                                                  <span className='font-semibold'>( {tour.reviews} reviews)</span>
                                             </h1>
                                             
                                             <h1 className='text-xl font-bold text-orange-500'> $ {tour.price} </h1>

                                        </div>
                                        <div className="flex gap-4 items-center justify-around pt-2">
                                             <button onClick={() => handleDelete(tour._id)} className="btn btn-warning text-red-700"><Trash2 /></button>
                                             <button className="btn btn-warning  text-success font-bold"> <Edit></Edit>  </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
               <div>
                    <div className="flex justify-center items-center mt-8 space-x-4">
                         <button
                              onClick={handlePreviousPage}
                              disabled={page === 1}
                              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
                         >
                              Previous
                         </button>
                         <span className="text-gray-700">
                              Page {page} of {totalPages}
                         </span>
                         <button
                              onClick={handleNextPage}
                              disabled={page === totalPages}
                              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
                         >
                              Next
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default ALLTours;
