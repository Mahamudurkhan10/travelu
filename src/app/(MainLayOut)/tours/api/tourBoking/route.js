import ConnectDB from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
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
export const GET = async (request) => {

     try {
          const db = await ConnectDB()
          const { searchParams } = new URL(request.url) 
          const email = searchParams.get("email")
          console.log(email)
          const query = { email: email }
          const result = await db.collection("bokings").find(query).toArray()
          // console.log(user)
          return new NextResponse(JSON.stringify(result), { status: 200 })
     } catch (error) {

          return new NextResponse(JSON.stringify({message :"some thing went wrong"}),{status:500})
     }
}
export const DELETE = async (request) => {

     try {
          const db = await ConnectDB()
          const { searchParams } = new URL(request.url) 
          const id = searchParams.get("id")
         
          const query = {_id : new ObjectId(id) }
          const res = await db.collection("bokings").deleteOne(query)
          // console.log(user)
          return new NextResponse(JSON.stringify(res), { status: 200 })
     } catch (error) {
          return new NextResponse(JSON.stringify({message :"some thing went wrong"}),{status:500})

     }
}