var express = require("express");
var router = express.Router();

var generosController = require("../controllers/generosController");

router.get("/buscar/:id", function (req, res) {
    generosController.buscarPorId(req, res);
});

module.exports = router;