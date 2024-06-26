import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import filmsRouter from "./routes/filmsRouter.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/campers", filmsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose.connect(process.env.DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(process.env.PORT, () => {
  console.log("Server is running. Use our API on port: 3000");
});
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

export default app;