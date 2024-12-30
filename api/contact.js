import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Environment variable
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
      }

      // Connect to MongoDB
      await client.connect();
      const db = client.db("coreSilicon");
      const collection = db.collection("contacts");

      // Insert into the collection
      await collection.insertOne({ name, email, message, createdAt: new Date() });

      res.status(200).json({ success: true, message: "Message saved!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
