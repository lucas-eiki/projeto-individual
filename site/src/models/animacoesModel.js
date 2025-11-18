var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT id, titulo, sinopse, ano_lancamento, imagem, classificacao, id_categoria FROM animacao`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(id) {
    var instrucaoSql = `SELECT titulo, sinopse, ano_lancamento, imagem, classificacao, categoria.nome AS categoria FROM animacao JOIN categoria ON animacao.id_categoria = categoria.id WHERE animacao.id = ${id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listar, buscarPorId };