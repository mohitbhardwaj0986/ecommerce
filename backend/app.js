import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: ".env" });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true,
  }),
  express.json(),
);
app.use(cookieParser())

export default app;
