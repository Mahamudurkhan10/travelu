
import ConnectDB from "@/lib/ConnectDB";

import { NextResponse } from "next/server";

export const GET = async(request)=>{
      
     try {
          const db = await ConnectDB()
          const {searchParams} = new URL(request.url)
          const email = searchParams.get("email")
          // console.log(email)
          const query = {email : email}
          const user = await db.collection("users").findOne(query)
          // console.log(user)
          return new NextResponse(JSON.stringify(user),{status:200})
     } catch (error) {
          return new NextResponse(JSON.stringify({message:"somethings wrong user does not find"}),{status:500})
          
     }
}