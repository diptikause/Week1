const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Include this if your frontend sends cookies
  })
);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/week1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MongoDB Schema
const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

// Register Endpoint
app.post("/Register", (req, res) => {
  const { name, email, password } = req.body;

  // Check for missing fields
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  EmployeeModel.create(req.body)
    .then((employee) =>
      res.json({ message: "Registration is successful", employee })
    )
    .catch((err) => {
      console.error("Error creating employee:", err);
      res.status(500).json({ error: err.message });
    });
});

// Start Server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});



