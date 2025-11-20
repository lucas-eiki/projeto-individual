var express = require("express");
var router = express.Router();

var avaliacoesController = require("../controllers/avaliacoesController");

router.get("/listar/:id_animacao/usuario/:id_usuario", function (req, res) {
    avaliacoesController.listarPorId(req, res);
});

router.get("/buscar/:id_animacao/usuario/:id_usuario", function (req, res) {
    avaliacoesController.buscarPorUsuario(req, res);
});

router.post("/enviar/:id_animacao/usuario/:id_usuario", function (req, res) {
    avaliacoesController.enviar(req, res);
})

module.exports = router;