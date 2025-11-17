var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT id, titulo, sinopse, ano_lancamento, imagem, classificacao, id_categoria FROM animacao`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(id) {
    var instrucaoSql = `SELECT id, titulo, sinopse, ano_lancamento, imagem, classificacao, id_categoria FROM animacao WHERE id = ${id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listar, buscarPorId };