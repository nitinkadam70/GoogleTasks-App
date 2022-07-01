const { Router } = require("express")

const authRouter = Router();

authRoutes.post("/signup", (req, res) => {
    res.send("post signup")
})

authRouter.post("/login", (req, res) => {
    res.send("post login")
})

module.exports = authRouter;