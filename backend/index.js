import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { dbConnection } from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import path from "path";
configDotenv();
dbConnection();
setInterval(dbConnection, 1000 * 60 * 60 * 24);
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const __dirname = path.resolve();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
app.use("/api/user", userRoutes);
app.use("/api", blogRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
