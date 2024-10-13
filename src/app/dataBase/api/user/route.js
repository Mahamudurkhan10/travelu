
import ConnectDB from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";

export const GET = async (request) => {

     try {
          const db = await ConnectDB()
          const { searchParams } = new URL(request.url)
          const email = searchParams.get("email")
          // console.log(email)
          const query = { email: email }
          const user = await db.collection("users").findOne(query)
          // console.log(user)
          return new NextResponse(JSON.stringify(user), { status: 200 })
     } catch (error) {

          return new NextResponse(JSON.stringify({ message: "somethings wrong user does not find" }), { status: 500 })
     }
}
export const PATCH = async (request) => {
     const body = await request.json()
     try {
          const id = body.id
          const password = body.password
          const db = await ConnectDB()
          const filter = { _id: new ObjectId(id) }
          const user = await db.collection("users").findOne(filter)
          if (!user) {
               return new NextResponse(JSON.stringify({ message: "User not found." }), { status: 404 });
          }
          const isPasswordMatch = await bcrypt.compare(password, user.password)
          if (!isPasswordMatch) {
               return new NextResponse(JSON.stringify({ message: "Incorrect password." }), { status: 403 });
          }
          const options = { upsert: true }
          const updateUserData = {
               $set: {
                    name: body.name,
                    photo: body.photo
               }
          }
          const result = await db.collection("users").updateOne(filter, updateUserData, options)
          return new NextResponse(JSON.stringify(result), { status: 200 })
     } catch (error) {
          return new NextResponse(JSON.stringify({ message: "somethings wrong user does not find" }), { status: 500 })
     }


}