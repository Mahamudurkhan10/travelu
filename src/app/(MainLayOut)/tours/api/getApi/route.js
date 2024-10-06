import ConnectDB from "@/lib/ConnectDB"
import { NextResponse } from "next/server"

export const GET = async(request,) =>{
    
     try {
          const db = await ConnectDB()
          const {searchParams} = new URL(request.url)
         
          const place = searchParams.get("place")
          const search = searchParams.get("search")
          const category = searchParams.get("category")
          console.log(place)
          let query = {}
          if(place){
               query.place = place;
          }
          else if(search){
               query ={
                    $or:[
                         {place:{$regex: search,$options:"i"}},
                         {category:{$regex: search,$options:"i"}},
                         {title:{$regex: search,$options:"i"}}

                    ]
               }
          }
          else if(category){
               query.category = category;
          }
          const tours = await db.collection("tours").find(query).toArray()
          return new NextResponse(
               JSON.stringify(tours),
               {status:200}
          )
     } catch (error) {
          console.log(error)
          return new NextResponse(JSON.stringify({message:"some thing went wrong"}),{status:500})
     }
} 