import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// ✅ LOAD ENV FIRST
dotenv.config();

import { healthCheck, rootHandler, askHandler } from "./controllers/qa.controller";

const app = express();
const PORT = 3000;

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.get("/", rootHandler);
app.get("/health", healthCheck);
app.post("/ask", askHandler);

// ✅ DEBUG
console.log("API KEY LOADED:", process.env.OPENAI_API_KEY);

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});