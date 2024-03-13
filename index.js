import express from "express";
// import cors from "cors";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import

// routes declaration

// dashboard routes

// experimental
connectDB()
  .then(() => {
    app.listen(8080, () => {
      console.log(`⚙️  Server is running at port : 8080`);
    });
  })
  .catch((err) => console.log("MONGO db connection failed !!!", err));
// app.listen(8080, () => {
//   console.log(`⚙️  Server is running at port : 8080`);
// });

export default app;
