const express = require("express");
const mainController = require("../controllers/mainController");
const mainRouter = express.Router();

mainRouter.get("/send-mail", mainController.home);

module.exports = mainRouter;
