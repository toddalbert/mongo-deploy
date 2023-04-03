import { client } from "./dbConnect.js";

// Database Name
const dbName = 'myProject';
const db = client.db(dbName);
const collection = db.collection('test');

export async function addTest(req, res) {
  await collection.insertOne({ name: 'Test', test: true });
  res.send({ message: 'Test successfully added.' });
}

export async function getTest(req, res) {
  const tests = await collection.find({}).toArray();
  res.send(tests);
}
