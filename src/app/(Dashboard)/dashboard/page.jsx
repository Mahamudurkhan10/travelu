'use client'
import useUser from '@/Components/hooks/useUser';
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
   const router = useRouter()
   const [User, refetch] = useUser()
   if(User?.role === "user"){
     router.push('/dashboard/user/userHome')
   }
   else if(User?.role ==="admin"){
    router.push('/dashboard/admin/adminHome')
   }
  
     return (
          <div>
             
          </div>
     );
};

export default Dashboard;