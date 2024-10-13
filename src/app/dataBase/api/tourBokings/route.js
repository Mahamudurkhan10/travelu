import ConnectDB from "@/lib/ConnectDB"
import { NextResponse } from "next/server"

export const GET = async (request) => {

     try {
          const db = await ConnectDB()


          // console.log(email)

          const bokings = await db.collection("bokings").find().toArray()
          // console.log(user)
          return new NextResponse(JSON.stringify(bokings), { status: 200 })
     } catch (error) {
          return new NextResponse(JSON.stringify({ message: "somethings wrong user does not find" }), { status: 500 })

     }
}