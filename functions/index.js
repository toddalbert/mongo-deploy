import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getTest, addTest } from "./src/test.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tests', getTest);

app.post('/tests', addTest);

export const api = functions.https.onRequest(app);
