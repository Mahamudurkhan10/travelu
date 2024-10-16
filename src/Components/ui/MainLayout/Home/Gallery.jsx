import { AudioWaveform } from 'lucide-react'


export default function Gallery() {
     return (
          <div className='lg:max-w-7xl lg:px-4 px-0  mx-auto mt-16 mb-12'>
               <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 text-white'>
                    <div className='bg-cover rounded-xl lg:row-span-2 lg:col-span-2 bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/7bGCqbr/img-01.jpg')" }}>
                         <div className='h-[500px] space-y-3 py-40  text-center'>
                              <h1 className='text-5xl font-semibold '> Ice Adventure Vacations </h1>
                              <div className='flex items-center justify-center'>
                                   <AudioWaveform className='font-bold' size={30} strokeWidth={1.5} />
                              </div>
                              <p className='text-xl font-semibold'> your best vacation ever </p>
                         </div>
                    </div>

                    <div className='bg-cover rounded-xl  lg:col-span-2 bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/gyyHt2d/img-02.jpg')" }}>
                         <div className='h-[500px] lg:h-0 space-y-3 lg:pt-16  pt-48 text-center'>
                              <h1 className='text-5xl font-semibold '> National Park </h1>
                              <div className='flex items-center justify-center'>
                                   <AudioWaveform className='font-bold' size={30} strokeWidth={1.5} />
                              </div>

                         </div>
                    </div>

                    <div className='bg-cover rounded-xl  lg:col-span-2 bg-center bg-no-repeat' style={{ backgroundImage: "url('https://i.ibb.co.com/MctZhZG/img-03.jpg')" }}>
                         <div className=' h-[500px] lg:h-0 space-y-3 lg:pt-16 pt-48  text-center'>
                              <h1 className='text-5xl font-semibold '> Forest Vacations </h1>
                              <div className='flex items-center justify-center'>
                                   <AudioWaveform className='font-bold' size={30} strokeWidth={1.5} />
                              </div>

                         </div>
                    </div>
               </div>
               <section className='mt-12 grid gap-5 grid-cols-1 md:text-center lg:text-start text-center lg:grid-cols-3'>
                    <div>
                         <h1 className='text-3xl font-semibold'> <span className='text-red-400 font-semibold'>01</span> Luxury Hotels </h1>
                         <p className='py-3 text-[15px]'>Experience the epitome of luxury with our handpicked hotels, offering world-class comfort, stunning locations, and personalized services. Enjoy elegant suites, gourmet dining, and rejuvenating spa treatments. Whether you are seeking a serene getaway or a vibrant city escape, our luxury hotels ensure an unforgettable travel experience tailored just for you.  </p>
                    </div>
                    <div>
                         <h1 className='text-3xl font-semibold'> <span className='text-red-400 font-semibold'>02</span> Tourist Guide </h1>
                         <p className='py-3  text-[15px]'> A tourist guide enhances your travel experience by offering expert insights into local attractions, culture, and hidden gems. With personalized recommendations, practical tips, and in-depth knowledge, they help you explore destinations with ease. A guide ensures you enjoy a well-informed, enriching, and memorable journey. </p>
                    </div>
                    <div>
                         <h1 className='text-3xl font-semibold'> <span className='text-red-400 font-semibold'>03</span> Flights Tickets </h1>
                         <p className='py-3 text-[15px]'> Flight tickets are your gateway to air travel, providing essential details like travel dates, destinations, and seating. Whether for business or leisure, booking early ensures the best rates and flexibility. Choose from economy, business, or first-class options to suit your needs and embark on your next adventure. </p>
                    </div>
               </section>
          </div>
     )
}
