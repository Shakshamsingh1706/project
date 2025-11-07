const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.static(path.join(__dirname, "src")));

app.get("/api", async (req, res) => {
  try {
    const backend = await axios.get("http://localhost:5000/api");
    res.json(backend.data);
  } catch (e) {
    res.status(500).json({ error: "Backend unreachable" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Frontend running on " + port));

