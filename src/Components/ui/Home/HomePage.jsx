import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import PopularTour from './PopularTour';
import TopDestinations from './TopDestinations';

const HomePage = () => {
     return (
          <div>
               <Banner></Banner>

               <div className="">
                    <Gallery></Gallery>
               </div>
               <PopularTour></PopularTour>
               <TopDestinations></TopDestinations>
          </div>
     );
};

export default HomePage; 