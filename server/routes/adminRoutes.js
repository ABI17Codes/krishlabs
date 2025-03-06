const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../model/Admin");
const Blog = require("../model/Blog");
const verifyAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Admin Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }
  if (!(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ message: "Invalid password credentials" });
  }
  // console.log("Attempted login with username:", username);

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, { httpOnly: true }).json({ message: "Login successful" });
});

// Admin Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
});

// Protected CRUD Routes for Blog Management (Only Admins)
router.post("/blog", verifyAdmin, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Blog({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/blog", verifyAdmin, async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.put("/blog/:id", verifyAdmin, async (req, res) => {
  const { title, content } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(updatedBlog);
});

router.delete("/blog/:id", verifyAdmin, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

module.exports = router;
