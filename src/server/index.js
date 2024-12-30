const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const itemController = require("./controllers/itemController");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// CRUD Routes
app.get("/", (req, res) => {
  res.send("API is running");
});
app.post("/api/items", itemController.createItem);
app.get("/api/items", itemController.getItems);
app.put("/api/items/:id", itemController.updateItem);
app.delete("/api/items/:id", itemController.deleteItem);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});