import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import template from "../template";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

// express config
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.status(200).send(template());
});
app.use("/", authRoutes);
app.use("/", userRoutes);

// jwt error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
