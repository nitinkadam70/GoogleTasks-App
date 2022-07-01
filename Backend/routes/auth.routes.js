const { Router } = require("express")

const authRoutes = Router();

authRoutes.post("/signup", (req, res) => {
    res.send("post request")
})


module.exports = authRoutes;