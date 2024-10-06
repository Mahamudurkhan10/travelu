'use client'
import axios from 'axios';
import { AlarmClock, Star, Torus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const AllTours = () => {
     const session = useSession()
     console.log(session)
     const [tours, setTours] = useState();
     const [selectedPlace, setSelectedPlace] = useState('');
     const [selectedSearch, setSelectedSearch] = useState('');
     const [selectCategory, setSelectCategory] = useState('');
     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
     const [limit, setLimit] = useState(9);
     const [loading, setLoading] = useState(true)
     useEffect(() => {
          const fetchTours = async () => {
               
               try {
                    const res = await axios.get('http://localhost:3000/tours/api/getApi', {
                         params: { place: selectedPlace, search: selectedSearch, category: selectCategory, limit, page }

                    });
                    setTours(res.data.tours);
                    setTotalPages(res.data.totalPages)
               } catch (error) {
                    console.error("Error fetching tours:", error);
               }
               setLoading(false)

          };
          fetchTours();
     }, [selectedPlace, selectedSearch, selectCategory, page, limit]);

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
     const handleCategory = (e) => {
          e.preventDefault()
          console.log(e.target.value)
          setSelectCategory(e.target.value)
          setPage(1)
     }
     if (loading) {
          return(
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
               <div className="grid  lg:grid-cols-5 items-center gap-2 mt-12">
                    <div className="p-4 lg:col-span-2 lg:flex grid grid-cols-3 gap-3 ">
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
                    <div className="lg:col-span-1">
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
                    <div className="col-span-1">

                    </div>
                    <div className="lg:col-span-1  ">
                         <select onChange={handleCategory} className="select w-full border py-3 rounded-xl border-warning p-3 max-w-xs">
                              <option disabled selected> Select Category </option>
                              <option value={""}>ALL</option>
                              <option value={"General Tours"}>General Tours</option>
                              <option value={"City Tours"}>City Tours</option>
                              <option value={"Historical Tours"}>Historical Tours</option>
                              <option value={"Cultural Tours"}>Cultural Tours</option>
                              <option value={"Culinary Tours"}>Culinary Tours</option>
                              <option value={"Fashion Events"}>Fashion Events</option>
                              <option value={"Night Tours"}>Night Tours</option>
                              <option value={"Historical Tours"}>Historical Tours</option>
                              <option value={"Photography Tours"}>Photography Tours</option>
                              <option value={"Romantic Tours"}>Romantic Tours</option>

                         </select>
                    </div>
               </div>
               <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-5 gap-5">
                    {tours?.map((tour) => (
                         <div key={tour._id}>
                              <div className=''>
                                   <Image width={500} className='rounded-xl' height={500} src={tour.image} alt='image'></Image>
                                   <div className='bg-base-100 rounded-b-xl p-4 space-y-3 '>
                                        <div className="flex justify-between">
                                             <h1 className='text-xl font-semibold'> {tour.title} </h1>
                                             <h1 className="text-xl font-semibold"> {tour.place} </h1>
                                        </div>
                                        <p> {tour.category} </p>
                                        <div className='divider'></div>
                                        <div className='flex justify-between'>
                                             <h1 className='flex items-center gap-2'><AlarmClock /> 7 Days </h1>
                                             <h1>From </h1>
                                        </div>
                                        <div className='flex justify-between'>
                                             <h1 className='flex items-center gap-1'>
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-500' size={20} />
                                                  <Star className='text-yellow-700 mr-1' size={20} /> ( {tour.reviews} reviews)
                                             </h1>
                                             <h1 className='text-xl font-bold text-orange-500'> $ {tour.price} </h1>

                                        </div>
                                        <div className="pt-7">
                                             {
                                                  session.data === null ? <Link href={`/login`} className={""}><button
                                                  class="relative flex items-center  px-6 py-3 overflow-hidden font-medium transition-all bg-[#e7a500] rounded-md group"
                                             >
                                                  <span
                                                       class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#e7a500] rounded group-hover:-mr-4 group-hover:-mt-4"
                                                  >
                                                       <span
                                                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                                       ></span>
                                                  </span>
                                                  <span
                                                       class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-white rounded group-hover:-ml-4 group-hover:-mb-4"
                                                  >
                                                       <span
                                                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                                       ></span>
                                                  </span>
                                                  <span
                                                       class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-white rounded-md group-hover:translate-x-0"
                                                  >

                                                  </span>
                                                  <span
                                                       class="relative uppercase underline font-semibold w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-[#191919]"
                                                  >
                                                       Explore Tour
                                                  </span >

                                             </button></Link>:
                                                  <Link href={`/tours/${tour._id}`} className={""}><button
                                                       class="relative flex items-center  px-6 py-3 overflow-hidden font-medium transition-all bg-[#e7a500] rounded-md group"
                                                  >
                                                       <span
                                                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#e7a500] rounded group-hover:-mr-4 group-hover:-mt-4"
                                                       >
                                                            <span
                                                                 class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                                            ></span>
                                                       </span>
                                                       <span
                                                            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-white rounded group-hover:-ml-4 group-hover:-mb-4"
                                                       >
                                                            <span
                                                                 class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                                            ></span>
                                                       </span>
                                                       <span
                                                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-white rounded-md group-hover:translate-x-0"
                                                       >

                                                       </span>
                                                       <span
                                                            class="relative uppercase underline font-semibold w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-[#191919]"
                                                       >
                                                            Explore Tour
                                                       </span >

                                                  </button></Link> 
                                                   
                                             }

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

export default AllTours;
