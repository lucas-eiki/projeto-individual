var avaliacoesModel = require("../models/avaliacoesModel");

function listarPorId(req, res) {
    const id_animacao = req.params.id_animacao

    avaliacoesModel.listarPorId(id_animacao).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
}

function buscarPorUsuario(req, res) {
    const id_animacao = req.params.id_animacao
    const id_usuario = req.params.id_usuario

    avaliacoesModel.buscarPorUsuario(id_animacao, id_usuario).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
}

function enviar(req, res) {
    const id_animacao = req.params.id_animacao
    const id_usuario = req.params.id_usuario
    const nota = req.body.nota
    const comentario = req.body.comentario
    const data_avaliacao = req.body.data_avaliacao

    if (nota == undefined) {
        res.status(400).send("A nota está indefinida!");
    } else {
        avaliacoesModel.enviar(id_animacao, id_usuario, nota, comentario, data_avaliacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listarPorId,
    buscarPorUsuario,
    enviar
};