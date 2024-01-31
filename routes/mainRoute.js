const express = require("express");
const mainController = require("../controllers/mainController");
const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Mail Api is working fine",
  });
});
mainRouter.post("/send-mail", mainController.home);

module.exports = mainRouter;
