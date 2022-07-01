const express = require("express");
const connection = require("./db");
const cors = require("cors");

//Routes
const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes")

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", taskRouter);


app.listen(8000, async () => {
    try {
        await connection;
        console.log("Connected to DB successfully");
    }
    catch {
        console.log("Failed to connect DB")
    }
    console.log("Server running on localhost:8000")
})