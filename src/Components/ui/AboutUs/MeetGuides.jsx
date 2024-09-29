
import { AlarmClock, AudioWaveform, Star } from 'lucide-react';
import GuidesSwiper from './GuidesSwiper';


const MeetGuides = () => {
    
     const foods = [
          {
               id:1,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
        
          {
               id:2,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
          {
               id:3,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
          {
               id:4,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
          {
               id:5,
               image : "https://i.ibb.co.com/GHdTNGJ/img-01-1.jpg",
               name:'Martin Blake',
               title:"Adventure Master"
          },
        
     ]
     return (
          <div className='max-w-7xl mx-auto mt-12 '>
               <div>
                    <h1 className='text-4xl flex items-center gap-2 '> Meet The Guides <AudioWaveform className='font-bold' size={40} strokeWidth={1.5} />  </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit sit veritatis. </p>
               </div>
               <div >
                 <GuidesSwiper foods ={foods} ></GuidesSwiper>
               </div>
          </div>
     );
};

export default MeetGuides;