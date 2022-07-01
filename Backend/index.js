const express = require("express");
const connection = require("./db");

//Routes


const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Homepage")
})

app.listen(8000, async () => {
    try {
        await connection;
        console.log("Connected to DB successfully");
    }
    catch (err) {
        console.log("Failed to connect DB")
    }
    console.log("Server running on Port localhost:8000")
})