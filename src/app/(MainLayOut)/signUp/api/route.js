const { default: ConnectDB } = require("@/lib/ConnectDB");

export const POST =async(req)=>{
   const newUser = await req.json();
   try {
      const db = await ConnectDB();
      const userCollection =db.collection("users")
      const resp = await userCollection.insertOne(newUser)
      console.log(resp);
      return new Response(JSON.stringify({ message: "user created successfully"}),{status:200})
   } catch (error) {
     console.error("Error creating user:", error);
     
   }
}