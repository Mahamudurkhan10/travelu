import { AlarmClock, AudioWaveform, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const foods = [
  {
    id: 1,
    image: "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
    title: "Best of Canada Tours And Travel",
    place: "paris",
  },
 
  {
    id: 2,
    image: "https://i.ibb.co.com/NnK7sxN/img-06.jpg",
    title: "Best of Canada Tours And Travel",
    place: 'italy',
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/SRzkLS8/img-07.jpg",
    title: "Best of Canada Tours And Travel",
    place: 'Rome',
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/ckppttB/img-08.jpg",
    title: "Best of Canada Tours And Travel",
    place: 'France',
  },
  {
     id: 5,
     image: "https://i.ibb.co.com/J5C4YtT/img-09.jpg",
     title: "Best of Canada Tours And Travel",
     place: "canada",
   },
  {
     id: 6,
     image: "https://i.ibb.co.com/f1RMy5H/img-10.jpg",
     title: "Best of Canada Tours And Travel",
     place: "London",
   },
];

const Trending = () => {
  return (
    <div className='mt-12 lg:max-w-7xl px-0 lg:px-4 mx-auto'>
      <div className='text-center'>
        <h1 className='flex justify-center items-center'>
          <AudioWaveform className='font-bold' size={50} strokeWidth={1.5} />
        </h1>
        <h1 className='text-5xl py-4 font-semibold'>Trending</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora pariatur rerum?</p>
      </div>

      <div className='grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-2 gap-12'>
        {foods.map((food) => (
         <Link href={`/tours`} key={food.id}>
          <div >
            {/* Image Section */}
            <div
              className='relative bg-cover bg-center bg-no-repeat rounded-xl group duration-3000 opacity-90 hover:shadow-lg cursor-pointer'
              style={{ backgroundImage: `url(${food.image})` }}
            >
              {/* Overlay */}
              <div className='absolute inset-0 rounded-xl bg-[#191919] bg-opacity-10 group-hover:bg-opacity-60 transition-all duration-300'></div>

              {/* "From" Section */}
              <div className='h-[300px] rounded-xl border relative z-10 flex items-end'>
                {/* Sliding Up Content */}
                <div className='absolute bottom-0 group-hover:left-20 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
                  <h1 className='text-lg text-white'>From</h1>
                  <h1 className='text-2xl font-bold text-orange-500'>$ 1000</h1>
                </div>

                {/* Rating and Days Section */}
                <div className='absolute p-4 top-0 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-y-12 ease-in'>
                  <div className='flex gap-12'>
                    <h1 className='flex items-center gap-1'>
                      <Star className='text-yellow-500' size={20} />
                      <Star className='text-yellow-500' size={20} />
                      <Star className='text-yellow-500' size={20} />
                      <Star className='text-yellow-500' size={20} />
                      <p className='flex items-center'><Star className='text-yellow-400 mr-1 ' size={20} /> <span className='text-white font-semibold'>(3 reviews)</span></p>
                    </h1>
                    <h1 className='flex items-center text-white gap-2'>
                      <AlarmClock /> <span>7 Days</span>
                    </h1>
                  </div>
                </div>

                {/* Place Text Positioned in Bottom-Right Corner of Image */}
                <div className='absolute  '>
                  <h1 className='btn btn-warning  text-white  '>
                    {food.place}
                  </h1>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className='bg-base-100 rounded-b-xl  pt-2 space-y-3'>
              <h1 className='text-xl font-semibold'>{food.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat odio voluptatibus nesciunt suscipit.</p>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
