require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();

connectDB();

app.use(cors({
    origin: "https://progressive-web-application-vert.vercel.app", // later you can restrict frontend URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ FIXED STATIC PATH (IMPORTANT)
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});