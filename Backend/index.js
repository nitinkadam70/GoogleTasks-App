const express = require("express");
const connection = require("./db");
const cors = require("cors");
require("dotenv").config();

//Routes
const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes");

const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", taskRouter);

app.get("/", (req, res) => {
    res.send("Homepage")
})

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB successfully");
    }
    catch {
        console.log("Failed to connect DB")
    }
    console.log(`Server running on localhost:${process.env.PORT}`)
})