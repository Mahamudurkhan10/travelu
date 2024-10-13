import ConnectDB from "@/lib/ConnectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (request) => {

     try {
          const db = await ConnectDB()


          // console.log(email)

          const user = await db.collection("users").find().toArray()
          // console.log(user)
          return new NextResponse(JSON.stringify(user), { status: 200 })
     } catch (error) {
          return new NextResponse(JSON.stringify({ message: "somethings wrong user does not find" }), { status: 500 })

     }
}
export const DELETE = async (request) => {

     try {
          const db = await ConnectDB()
          const { searchParams } = new URL(request.url) 
          const id = searchParams.get("id")
          console.log(id)
          const query = {_id : new ObjectId(id) }
          const res = await db.collection("users").deleteOne(query)
          // console.log(user)
          return new NextResponse(JSON.stringify(res), { status: 200 })
     } catch (error) {
          return new NextResponse(JSON.stringify({message :"some thing went wrong"}),{status:500})

     }
}