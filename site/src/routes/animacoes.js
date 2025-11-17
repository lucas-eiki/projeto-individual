var express = require("express");
var router = express.Router();

var animacoesController = require("../controllers/animacoesController");

router.get("/listar", function (req, res) {
    animacoesController.listar(req, res);
});

router.get("/buscar/:id", function (req, res) {
    animacoesController.buscarPorId(req, res);
});

module.exports = router;