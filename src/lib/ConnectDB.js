import { MongoClient } from "mongodb";


let db;
let client;

export default async function ConnectDB() {
     if (db) return db;
     try {
          const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@atlascluster.6gwdl3v.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;
          if (!uri) {
               throw new Error("Please define the MONGODB_URI environment variable");
            }
          client = new MongoClient(uri, {
               serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
               }
          });
          db = client.db("travelu");
          console.log("Connected to MongoDB");  
          return db;
     } catch (error) {
          console.error("Failed to connect to the database:", error);
          throw new Error("Database connection error");
     }

}
