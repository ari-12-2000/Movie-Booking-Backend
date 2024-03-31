import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    `mongodb+srv://arikum12000:${process.env.MONGODB_PASSWORD}@cluster0.xcek0zz.mongodb.net/`
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
