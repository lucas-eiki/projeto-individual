var generosModel = require("../models/generosModel");

function buscarPorId(req, res) {
    const id = req.params.id

    generosModel.buscarPorId(id).then(
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
    buscarPorId
}