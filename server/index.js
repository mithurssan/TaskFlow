const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Task Flow API");
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
