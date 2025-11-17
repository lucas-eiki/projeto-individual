var animacoesModel = require("../models/animacoesModel");

function listar(req, res) {
    animacoesModel.listar().then((lista_animacoes) => {
        if (lista_animacoes.length > 0) {
            console.log(lista_animacoes)

            if (lista_animacoes.length > 0) {
                res.status(200).json(lista_animacoes);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }
    });
}

function buscarPorId(req, res) {
    const id = req.params.id

    animacoesModel.buscarPorId(id).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
}

module.exports = {
    listar,
    buscarPorId
};
