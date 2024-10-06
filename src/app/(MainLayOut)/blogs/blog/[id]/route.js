import ConnectDB from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


 export const GET = async(request,{params})=>{
     const {id} = params
    
     try {
          const db = await ConnectDB();
          const blogCollection = db.collection("blogs")
          const query = ({_id : new ObjectId(id)})
          
          const blog = await blogCollection.findOne(query)
          return new NextResponse(
               JSON.stringify(blog), // Respond with the fetched blogs
               { status: 200 } // Success status
             );
     } catch (error) {
          console.error("Error creating user:", error);
     return new NextResponse (JSON.stringify({ message: "some thing went wrong"}),{status:500})
     }   
}
