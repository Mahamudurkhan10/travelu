
import { AlarmClock, AudioWaveform, Star } from 'lucide-react';
import GuidesSwiper from './GuidesSwiper';


const MeetGuides = () => {
    
     const foods = [
          {
               id:1,
               image : "https://i.ibb.co.com/xDgTH9w/img-02-2.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
        
          {
               id:2,
               image : "https://i.ibb.co.com/bKrgW7X/img-03-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
          {
               id:3,
               image : "https://i.ibb.co.com/cNXNVZq/img-01-3.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
          {
               id:4,
               image : "https://i.ibb.co.com/bKrgW7X/img-03-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
          {
               id:5,
               image : "https://i.ibb.co.com/cNXNVZq/img-01-3.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
        
     ]
     return (
          <div className='max-w-7xl px-0 lg:px-4 mx-auto mb-12 mt-12'>
               <div>
                    <h1 className='text-4xl flex items-center gap-2 '> Meet The Guides <AudioWaveform className='font-bold' size={40} strokeWidth={1.5} />  </h1>
                    <p className='mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit sit veritatis. </p>
               </div>
               <div className='pt-8' >
                 <GuidesSwiper foods ={foods} ></GuidesSwiper>
               </div>
          </div>
     );
};

export default MeetGuides;