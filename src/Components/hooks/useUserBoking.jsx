import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';

const useUserBoking = () => {
    const session = useSession()
     console.log(session)
    const {data: Tours =[],refetch, ispending:loading} = useQuery({
      queryKey:["bokings",session?.data?.user?.email],
      queryFn: async ()=>{
          const res = await axios.get(`http://localhost:3000/tours/api/tourBoking`,{
               params:{email:session?.data?.user?.email}
          })
          console.log(res.data)
          return res.data;
      }
    });
    return [Tours,refetch,loading]
};

export default useUserBoking;