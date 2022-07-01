const { Router } = require("express")

const taskRouter = Router();

taskRouter.get("/task", (req, res) => {
    res.send("Task page")
})

module.exports = taskRouter;