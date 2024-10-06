import ConnectDB from "@/lib/ConnectDB"
import { NextResponse } from "next/server"

export const GET = async(request) =>{
     try {
          const db = await ConnectDB()
          const tours = await db.collection("tours").find().toArray()
          return new NextResponse(
               JSON.stringify(tours),
               {status:200}
          )
     } catch (error) {
          console.log(error)
          return new NextResponse(JSON.stringify({message:"some thing went wrong"}),{status:500})
     }
}