import { MongoClient } from "mongodb";
import { uri } from "../credentials.js";

export const client = new MongoClient(uri);
