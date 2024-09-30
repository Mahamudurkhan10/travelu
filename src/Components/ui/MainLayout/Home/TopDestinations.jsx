
import { AudioWaveform, LocateIcon, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
const Destinations = [
     {
          image: "https://i.ibb.co.com/Nr4D7JG/img-01.png",
          title: "America",
          location: "Statue of Liberty"
     },
     {
          image: "https://i.ibb.co.com/nMG6GJC/img-02.png",
          title: "Australia",
          location: "Sydney Opera House"
     },
     {
          image: "https://i.ibb.co.com/1ZhDMkV/img-03.png",
          title: "Italy",
          location: "Colosseum"
     },
     {
          image: "https://i.ibb.co.com/rftQ85L/img-04.png",
          title: "London",
          location: "Gib Ben"
     },
     {
          image: "https://i.ibb.co.com/9ymnDX1/img-05.png",
          title: "India",
          location: "Grate Taj Mahal"
     },
     {
          image: "https://i.ibb.co.com/WBBBQcJ/img-06.png",
          title: "Russia",
          location: "Saint Basil's Cathedral"
     },
]
const TopDestinations = () => {
     return (
          <div className='mt-16'>
               <div className='text-center '>
                    <h1 className='flex justify-center items-center'>  <AudioWaveform className='font-bold' size={50} strokeWidth={1.5} /> </h1>
                    <h1 className='text-5xl py-4 font-semibold'> Top Destinations </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora pariatur rerum?</p>
               </div>
               <div className='max-w-7xl  pt-10 grid grid-cols-2 lg:grid-cols-6 mx-auto'>
                    {
                         Destinations.map((d, inx) => <div key={inx}>
                              <div className='text-center space-y-2'>
                                   <Image className='mx-auto' src={d.image} height={100} width={140} alt='image' />
                                   <h1 className='text-xl font-semibold '> {d.title} </h1>
                                   <p> {d.location} </p>
                              </div>
                         </div>)
                    }
               </div>
               <div className='max-w-7xl  gap-4    grid grid-cols-1 lg:grid-cols-6 mx-auto pt-12'>
                    <div className='bg-cover relative group rounded-xl opacity-90 hover:shadow-black cursor-pointer hover:shadow-2xl col-span-2 bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co/khk0TSk/img-15.jpg')" }}>

                         <div className='absolute rounded-xl  inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500'></div>

                         <div className='h-[300px] text-white text-center relative z-10'>
                              <h1 className='p-5 relative'>


                                   <span className='absolute inset-0 opacity-0 group-hover:opacity-100 lg:group-hover:translate-y-[300px] group-hover:translate-y-12 transform transition-all duration-500 '>
                                        <button className='text-yellow-400 text-lg border-b-4 border-yellow-500 font-semibold'> View all Tours </button>
                                   </span>


                                   <div className='opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex justify-between items-end pt-52 lg:pt-[500px]'>
                                        <span className='flex items-center gap-3'>
                                             <MapPin /> North America
                                        </span>
                                        <h1 className='text-yellow-500 text-xl'>7 Tours</h1>
                                   </div>

                              </h1>
                         </div>
                    </div>
                    <div className='col-span-2  flex flex-col gap-4'>
                         <div className='bg-cover relative rounded-xl group opacity-90 hover:shadow-black cursor-pointer hover:shadow-2xl  bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/T1Wzz87/img-16.jpg')" }}>

                              <div className='absolute inset-0 rounded-xl bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500'></div>

                              <div className='h-[300px] text-white text-center relative z-10'>
                                   <h1 className='p-5 relative'>


                                        <span className='absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-12  transform transition-all duration-500 '>
                                             <button className='text-yellow-400 text-lg border-b-4 border-yellow-500 font-semibold'> View all Tours </button>
                                        </span>


                                        <div className='opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex justify-between items-end pt-52'>
                                             <span className='flex items-center gap-3'>
                                                  <MapPin /> North America
                                             </span>
                                             <h1 className='text-yellow-500 text-xl'>7 Tours</h1>
                                        </div>

                                   </h1>
                              </div>
                         </div>
                         <div className='bg-cover rounded-xl relative group opacity-90 hover:shadow-black cursor-pointer hover:shadow-2xl  bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/BtYKxd9/img-17.jpg')" }}>

                              <div className='absolute rounded-xl inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500'></div>

                              <div className='h-[300px] text-white text-center relative z-10'>
                                   <h1 className='p-5 relative'>


                                        <span className='absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-12 transform transition-all duration-500 '>
                                             <button className='text-yellow-400 text-lg border-b-4 border-yellow-500 font-semibold'> View all Tours </button>
                                        </span>


                                        <div className='opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex justify-between items-end pt-52'>
                                             <span className='flex items-center gap-3'>
                                                  <MapPin /> North America
                                             </span>
                                             <h1 className='text-yellow-500 text-xl'>7 Tours</h1>
                                        </div>

                                   </h1>
                              </div>
                         </div>

                    </div>
                    <div className='bg-cover rounded-xl relative group opacity-90 hover:shadow-black cursor-pointer hover:shadow-2xl col-span-2 bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/rwmXrZJ/img-18.jpg')" }}>

                         <div className='absolute rounded-xl inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500'></div>

                         <div className='h-[300px] text-white text-center relative z-10'>
                              <h1 className='p-5 relative'>


                                   <span className='absolute inset-0 opacity-0 group-hover:opacity-100  lg:group-hover:translate-y-[300px] group-hover:translate-y-12 transform transition-all duration-1000   '>
                                        <button className='text-yellow-400 text-lg border-b-4 border-yellow-500 font-semibold'> View all Tours </button>
                                   </span>


                                   <div className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 flex justify-between items-end lg:pt-[500px] pt-52'>
                                        <span className='flex items-center gap-3'>
                                             <MapPin /> North America
                                        </span>
                                        <h1 className='text-yellow-500 text-xl'>7 Tours</h1>
                                   </div>

                              </h1>
                         </div>
                    </div>




               </div>
          </div>
     );
};

export default TopDestinations;