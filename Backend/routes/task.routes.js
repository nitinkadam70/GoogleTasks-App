const { Router } = require("express")
const TaskModel = require("../models/Task");

const taskRouter = Router();


taskRouter.get("/:userId/task", async (req, res) => {
    let userId = req.params;
    let task = await TaskModel.find(userId)
    res.send(task)
})

taskRouter.post("/:userId/task", async (req, res) => {
    const userId = req.params.userId; //here we get userId from params 
    let payload = {
        ...req.body,
        userId
    }
    let task = await new TaskModel(payload);
    task.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: "something went wrong" });
        }
        return res.status(201).send(success) //success is whole payload that we have with userId
    })
})

taskRouter.delete("/:userId/task/:id", async (req, res) => {
    const id = req.params.id
    try {
        const task = await TaskModel.deleteOne({ "_id": id }, {})
        res.status(201).send({ DeleteSuccess: "Deleted Sucessfully" })
    }
    catch {
        res.status(500).send({ DeleteError: "Error while Deleting" })
    }
})

module.exports = taskRouter;