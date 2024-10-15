import { AudioWaveform } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Partner() {
  return (
    <div
      className='bg-cover relative  opacity-90 bg-fixed mt-16 bg-center bg-no-repeat'
      style={{ backgroundImage: "url('https://i.ibb.co/xf6sqww/bgparallax-03.jpg')" }}
    >
      <div className='absolute bg-black inset-0 opacity-70'> </div>
      <div className='lg:h-[500px] h-[600px] lg:max-w-7xl px-0 md:px-4 mx-auto'>
        <div className='text-center pt-20 text-white opacity-90'>
          <h1 className='flex justify-center items-center'>
            <AudioWaveform className='font-bold' size={50} strokeWidth={1.5} />
          </h1>
          <h1 className='text-5xl py-4 font-semibold'>Our Partners</h1>
        </div>
        <div className='grid grid-cols-2 opacity-90 lg:grid-cols-5 pt-12 md:grid-cols-4 gap-6'>
        
          <Image src={"https://i.ibb.co.com/nkwN56x/img-01-2.png"} width={150} height={100} alt='image' />
          <Image src={"https://i.ibb.co.com/6Wh350G/img-02-1.png"} width={150} height={100} alt='image' />
          <Image src={"https://i.ibb.co.com/fQk4gCB/img-03-1.png"} width={150} height={100} alt='image' />
          <Image src={"https://i.ibb.co.com/R0fSxKB/img-04-1.png"} width={150} height={100} alt='image' />
          <Image src={"https://i.ibb.co.com/R0fSxKB/img-04-1.png"} width={150} height={100} alt='image' />
        </div>
      </div>
    </div>
  );
}
