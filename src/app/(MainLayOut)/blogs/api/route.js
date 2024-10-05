import ConnectDB from "@/lib/ConnectDB";
import { NextResponse } from "next/server";


 export const GET = async(request)=>{
     try {
          const db = await ConnectDB();
          const blogCollection = db.collection("blogs")
          const resp = await blogCollection.find().toArray()
          return new NextResponse(
               JSON.stringify({ resp }), // Respond with the fetched blogs
               { status: 200 } // Success status
             );
     } catch (error) {
          console.error("Error creating user:", error);
     return new NextResponse (JSON.stringify({ message: "some thing went wrong"}),{status:500})
     }   
}