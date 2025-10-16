import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running!!!" });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
