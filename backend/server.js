const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const fetch = require("node-fetch");

dotenv.config(); // Load environment variables from .env

const app = express();

// Allow CORS for React frontend and Ngrok backend
const corsOptions = {
  origin: ["http://localhost:5173", process.env.NGROK_URL], 
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions)); 
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// POST Route to communicate with Flask API
app.post("/predict", async (req, res) => {
  try {
    const { text } = req.body;

    const flaskResponse = await fetch(`${process.env.NGROK_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await flaskResponse.json();

    if (!flaskResponse.ok) {
      return res.status(500).json({ error: "Flask API error" });
    }

    res.json(data);
  } catch (error) {
    console.error("Error forwarding request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
