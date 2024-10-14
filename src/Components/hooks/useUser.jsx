import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';

const useUser = () => {
    const session = useSession()
    console.log(session)
    const {data: User =[],refetch, ispending:loading} = useQuery({
      queryKey:["users",session?.data?.user?.email],
      queryFn: async ()=>{
          const res = await axios.get(`https://travelu-beta.vercel.app/dataBase/api/user`,{
               params:{email:session?.data?.user?.email}
          })
          console.log(res.data)
          return res.data;
      }
    });
    return [User,refetch,loading]
};

export default useUser;