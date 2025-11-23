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

function buscarTop1() {
    var instrucaoSql = `
    SELECT
        id_animacao,
        animacao.titulo,
        AVG(nota) media,
        COUNT(nota) numero_avaliacoes,
        COUNT(comentario) numero_comentarios,
        animacao.ano_lancamento,
        categoria.nome categoria,
        animacao.classificacao classificacao,
        animacao.imagem,
        (SELECT AVG(nota) FROM avaliacao) media_geral,
        (SELECT COUNT(nota) FROM avaliacao) numero_avaliacoes_total
    FROM avaliacao
    JOIN animacao
        ON avaliacao.id_animacao = animacao.id
    JOIN categoria
        ON animacao.id_categoria = categoria.id
    GROUP BY id_animacao
    ORDER BY AVG(nota) DESC, COUNT(nota) DESC, COUNT(comentario) DESC
    LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listar, buscarPorId, buscarTop1 };