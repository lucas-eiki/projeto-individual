var database = require("../database/config");

function buscarPorId(id) {
    var instrucaoSql = `
        SELECT
            nome
        FROM genero
        JOIN genero_da_animacao
            ON genero.id = genero_da_animacao.id_genero
        WHERE genero_da_animacao.id_animacao = ${id};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { buscarPorId};