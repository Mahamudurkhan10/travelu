import ConnectDB from "@/lib/ConnectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async(request,) =>{
    
     try {
          const db = await ConnectDB()
          const {searchParams} = new URL(request.url)
         
          const place = searchParams.get("place")
          const search = searchParams.get("search")
          const category = searchParams.get("category")
          const page = searchParams.get('page')
          const limit = searchParams.get('limit')
          
          
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
          const tours = await db.collection("tours").find(query).skip((page -1)* limit).limit(parseInt(limit)).toArray()
          const totalTours = await db.collection("tours").countDocuments(query)
          const totalPages = Math.ceil(totalTours/limit)
          return new NextResponse(
               JSON.stringify({tours,totalPages}),
               {status:200}
          )
     } catch (error) {
          console.log(error)
          return new NextResponse(JSON.stringify({message:"some thing went wrong"}),{status:500})
     }
} 
export const DELETE = async (request) => {

     try {
          const db = await ConnectDB()
          const { searchParams } = new URL(request.url) 
          const id = searchParams.get("id")
         
          const query = {_id : new ObjectId(id) }
          const res = await db.collection("tours").deleteOne(query)
          // console.log(user)
          return new NextResponse(JSON.stringify(res), { status: 200 })
     } catch (error) {
          return new NextResponse(JSON.stringify({message :"some thing went wrong"}),{status:500})

     }
}