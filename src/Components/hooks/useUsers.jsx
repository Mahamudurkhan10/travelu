import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';

const useUsers = () => {
    const session = useSession()
    console.log(session)
    const {data: Users =[],refetch, ispending:loading} = useQuery({
      queryKey:["users",],
      queryFn: async ()=>{
          const res = await axios.get(`http://localhost:3000/dataBase/api/users`)
          console.log(res.data)
          return res.data;
      }
    });
    return [Users,refetch,loading]
};

export default useUsers;