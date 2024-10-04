import ConnectDB from "@/lib/ConnectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt"
const handler = NextAuth({
     session: {
          strategy: 'jwt',
          maxAge: 30 * 24 * 60 * 60
     },
     providers: [
          CredentialsProvider({
               credentials: {
                    email: {},
                    password: {}
               },

               async authorize(credentials) {
                    const { email, password } = credentials;
                    if (!email || !password) {
                         return null
                    }
                    const db = await ConnectDB();
                    const currentUser = await db.collection("users").findOne({ email })
                    if (!currentUser) {
                         return
                    }
                    const passwordMatched = bcrypt.compareSync(password, currentUser.password)
                    if (!passwordMatched) {
                         return null;
                    }
                    return currentUser;
               }
          }),
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),

     ],
     callbacks: {},
     pages: {
          signIn: '/login'
     },
})
export { handler as GET, handler as POST }