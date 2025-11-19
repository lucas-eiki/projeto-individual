var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT id, titulo, sinopse, ano_lancamento, imagem, classificacao, id_categoria FROM animacao`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(id) {
    var instrucaoSql = `
        SELECT 
            animacao.titulo titulo, 
            animacao.sinopse sinopse, 
            animacao.ano_lancamento ano_lancamento, 
            animacao.imagem imagem, 
            animacao.classificacao classificacao, 
            categoria.nome AS categoria,
            AVG(avaliacao.nota) media_nota,
            COUNT(avaliacao.nota) qtd_avaliacoes
        FROM animacao
        LEFT JOIN categoria
            ON animacao.id_categoria = categoria.id
        LEFT JOIN avaliacao
            ON animacao.id = avaliacao.id_animacao
        WHERE animacao.id = ${id}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listar, buscarPorId };