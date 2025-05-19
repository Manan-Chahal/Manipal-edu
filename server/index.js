const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const contactRoutes = require("./routes/ContactUs");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to the database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());

const whitelist = process.env.CORS_ORIGIN
  ? JSON.parse(process.env.CORS_ORIGIN)
  : ["*"];

app.use(
  cors({
    origin: whitelist,
    credentials: true,
    maxAge: 14400,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Connect to Cloudinary
cloudnairyconnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/contact", contactRoutes);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

// Graceful error handling
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use.`);
    process.exit(1);
  } else {
    console.error("❌ Server error:", err);
  }
});
