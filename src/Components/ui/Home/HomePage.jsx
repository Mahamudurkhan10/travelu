import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import PopularTour from './PopularTour';
import TopDestinations from './TopDestinations';
import Trending from './Trending';
import Partner from './Partner';

const HomePage = () => {
     return (
          <div>
               <Banner></Banner>

               <div className="">
                    <Gallery></Gallery>
               </div>
               <PopularTour></PopularTour>
               <TopDestinations></TopDestinations>
               <Trending></Trending>
               <Partner></Partner>
          </div>
     );
};

export default HomePage; 