import { NextResponse } from "next/server";

const { default: ConnectDB } = require("@/lib/ConnectDB");
import bcrypt from "bcrypt"
export const POST =async(request)=>{
   const newUser = await request.json();
   console.log(newUser);
   try {
      const db = await ConnectDB();
      const userCollection =db.collection("users")
      const existUser = await userCollection.findOne({email: newUser.email})
      if(existUser){
         return new NextResponse (JSON.stringify({ message: "user already exists"}),{status:304})
      }
      const hashedPassword = bcrypt.hashSync(newUser.password,14)
      const resp = await userCollection.insertOne({...newUser,password:hashedPassword})
     
      console.log(resp);
      return new NextResponse (JSON.stringify({ message: "user created successfully"}),{status:200})
   } catch (error) {
     console.error("Error creating user:", error);
     return new NextResponse (JSON.stringify({ message: "some thing went wrong"}),{status:500})
   }
}