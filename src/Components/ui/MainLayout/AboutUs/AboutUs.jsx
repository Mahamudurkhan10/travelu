import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='max-w-7xl mx-auto pt-12 '>
      {/* First section: flex-row layout */}
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <Image
          src={"https://i.ibb.co.com/mcfd7Zb/neom-85ey1v-FIwkc-unsplash.jpg"} 
          className='rounded'
          blurDataURL='data:...'
          placeholder="blur"
          width={641}
          height={500}
          alt='image'
        />
        <div>
          <h1 className='text-4xl font-semibold'>A Little About Us</h1>
          <p className='py-8'>
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <p>
            Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>
      </div>

    
      <div className='flex flex-col-reverse lg:flex-row gap-12 items-center mt-1'>
        <div>
          <h1 className='text-4xl font-semibold'>More About Us</h1>
          <p className='py-8'>
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <p>
            Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>
        <Image
          src={"https://i.ibb.co.com/jGnb539/jack-millard-zjy-P-UYI-ko-unsplash.jpg"} 
          className='rounded'
          blurDataURL='data:...'
          placeholder="blur"
          width={642}
          height={500}
          alt='image'
        />
      </div>
    </div>
  );
};

export default AboutUs;
