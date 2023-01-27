import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(express.static(path.resolve(new URL(import.meta.url).pathname, '..', '..', 'client', 'build')));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(4500, () => {
  console.log("Connected!");
});
