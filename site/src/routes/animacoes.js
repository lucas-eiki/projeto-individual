var express = require("express");
var router = express.Router();

var animacoesController = require("../controllers/animacoesController");

router.get("/listar", function (req, res) {
    animacoesController.listar(req, res);
});

module.exports = router;