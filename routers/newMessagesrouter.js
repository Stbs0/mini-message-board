const express = require("express");
const newMessagesRouter = express.Router();

newMessagesRouter.get("/", (req, res) => {
    console.log("form")
    res.render("form")
});
newMessagesRouter.post("/", (req, res) => {

    console.log(req.body)
    res.render("form")
});

module.exports = newMessagesRouter;