const express = require("express");
const { queryDatabase } = require("./sqlServer");
const cors = require("cors");

const app = express();
app.use(express.json());

// Alternatively, configure specific origins
app.use(
  cors({
    origin: "http://localhost:4200", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Product route: GET all Products
app.get("/api/products", async (req, res) => {
  try {
    const result = await queryDatabase("SELECT * FROM PRODUCTS");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Product route: POST a new Product
app.post("/api/products", async (req, res) => {
  const { id, name, price } = req.body;
  try {
    const result = await queryDatabase(
      "INSERT INTO PRODUCTS (id,name, price) VALUES (?,?, ?)",
      [id, name, price]
    );
    res.status(201).json({ message: "User created", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
