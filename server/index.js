const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Admin = require("./model/Admin");
const bcrypt = require("bcryptjs");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.API_URL , credentials: true }));
app.use(cookieParser());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected...");
    await createAdmin();
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
};

// app.use("/uploads", express.static("uploads"));

// Create admin if not exists
const createAdmin = async () => {
  try {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      console.error("❌ Error: ADMIN_USERNAME and ADMIN_PASSWORD must be set in .env");
      return;
    }

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      console.log("✅ Admin already exists.");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({ username, password: hashedPassword });
      await newAdmin.save();
      console.log(`✅ Admin Created! Username: ${username}, Password: (Hidden for security)`);
    }
  } catch (err) {
    console.error("❌ Error creating admin:", err);
  }
};

// Routes
app.use("/admin", require("./routes/adminRoutes"));

// Start Server
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
