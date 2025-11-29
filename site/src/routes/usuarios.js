var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload');

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/atualizar/:id_usuario", upload.single('foto'), function (req, res) {
    usuarioController.atualizarPerfil(req, res);
})

module.exports = router;