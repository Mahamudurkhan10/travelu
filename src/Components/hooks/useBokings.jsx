import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useBokings = () => {
     const {data: Bokings =[],refetch, ispending:loading} = useQuery({
          queryKey:["bokings",],
          queryFn: async ()=>{
              const res = await axios.get(`https://travelu-beta.vercel.app/dataBase/api/tourBokings`)
              console.log(res.data)
              return res.data;
          }
        });
        return [Bokings,refetch,loading]
};

export default useBokings;