const express = require("express");
const app = express();
// require mongoDB in here
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TASK MANAGEMENT SERVER is running");
});
app.listen(port, () => {
  console.log(`TASK MANAGEMENT SERVER is running on port ${port}`);
});
