import ConnectDB from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const POST = async (request) =>{
     const query = await request.json();
     console.log(query)
     try {
          const db = await ConnectDB()
          const bokingCollection = await db.collection('bokings')
          const result = await bokingCollection.insertOne(query)
          console.log(result)
          return new NextResponse(JSON.stringify(result),{status:200})
     } catch (error) {
          return new NextResponse(JSON.stringify({message :"some thing went wrong"}),{status:500})
     }
}