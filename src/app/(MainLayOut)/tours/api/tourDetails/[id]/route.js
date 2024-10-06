import ConnectDB from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


 export const GET = async(request,{params})=>{
     const {id} = params
    
     try {
          const db = await ConnectDB();
          const toursCollection = db.collection("tours")
          const query = ({_id : new ObjectId(id)})
          
          const tour = await toursCollection.findOne(query)
          return new NextResponse(
               JSON.stringify(tour), // Respond with the fetched blogs
               { status: 200 } // Success status
             );
     } catch (error) {
          console.error("Error creating user:", error);
     return new NextResponse (JSON.stringify({ message: "some thing went wrong"}),{status:500})
     }   
}
