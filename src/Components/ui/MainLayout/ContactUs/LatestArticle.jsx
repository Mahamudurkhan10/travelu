import { AudioWaveform, MapPin } from 'lucide-react';
import React from 'react';
const articles = [
     {
          id: 1,
          image: "https://i.ibb.co.com/wzYj8r9/img-02-1.jpg",
     },
     {
          id: 2,
          image: "https://i.ibb.co.com/gyyHt2d/img-02.jpg",
     },
     {
          id: 3,
          image: "https://i.ibb.co.com/Kxw5T24/pexels-andreimike-1271619.jpg",
     },
     {
          id: 4,
          image: "https://i.ibb.co.com/SmFYP01/img-38.jpg",
     },
     {
          id: 5,
          image: "https://i.ibb.co.com/J5C4YtT/img-09.jpg",
     },

]
const LatestArticle = () => {
     return (
          <div className='max-w-7xl mx-auto pt-12 mb-12'>
               <div className='text-center space-y-4'>
                    <div className='flex items-center text-center justify-center'>
                         <AudioWaveform className='font-bold' size={50} strokeWidth={1.5} />
                    </div>
                    <h1 className='text-5xl py-1  font-semibold'>Latest Articles</h1>
                    <h1 className='text-xl mt-5 font-normal'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam consectetuer</h1>
               </div>
               <div className='grid lg:grid-cols-4 gap-3 grid-cols-1 mt-12'>
                    {
                         articles.reverse().slice(0, 4).map(a => <div key={a.id}>
                              <div className='bg-cover relative group rounded-xl opacity-90 hover:shadow-black cursor-pointer hover:shadow-2xl col-span-2 bg-center bg-no-repeat' style={{ backgroundImage:`url(${a.image})`}}>

                                   <div className='absolute rounded-xl  inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500'></div>

                                   <div className='h-[300px] text-white text-center relative z-10'>
                                        <h1 className='p-5 relative'>


                                             <span className='absolute inset-0 opacity-0 group-hover:opacity-100 lg:group-hover:translate-y-12 group-hover:translate-y-12 transform transition-all duration-500 '>
                                                  <button className='text-yellow-400 text-lg  border-yellow-500 font-semibold'> Bungee Jumping Trip </button>
                                             </span>


                                             <div className='opacity-100  transition-opacity duration-300 flex justify-between items-end pt-52 '>
                                                 <h1>Feb 22,2024 </h1>
                                             </div>

                                        </h1>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default LatestArticle;