var database = require("../database/config");

function listarPorId(id) {
    var instrucaoSql = `
    SELECT
        usuario.nome nome,
        usuario.apelido apelido,
        usuario.imagem_perfil imagem_perfil,
        avaliacao.nota nota,
        avaliacao.comentario comentario,
        DATE_FORMAT(avaliacao.data_avaliacao, '%Y-%m-%d') data_avaliacao
    FROM avaliacao
    JOIN animacao
        ON animacao.id = avaliacao.id_animacao
    JOIN usuario
        ON usuario.id = avaliacao.id_usuario
    WHERE animacao.id = ${id}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorUsuario(id_animacao, id_usuario) {
    var instrucaoSql = `
    SELECT
        usuario.nome nome,
        usuario.apelido apelido,
        usuario.imagem_perfil imagem_perfil,
        avaliacao.nota nota,
        avaliacao.comentario comentario,
        DATE_FORMAT(avaliacao.data_avaliacao, '%Y-%m-%d') data_avaliacao
    FROM avaliacao
    JOIN animacao
        ON animacao.id = avaliacao.id_animacao
    JOIN usuario
        ON usuario.id = avaliacao.id_usuario
    WHERE animacao.id = ${id} AND usuario.id = ${id_usuario}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviar(id_animacao, id_usuario, nota, comentario, data_avaliacao) {
    let comentarioAvaliacao = comentario == '' ? null : `'${comentario}'`

    var instrucaoSql = `
        INSERT INTO avaliacao (id_usuario, id_animacao, nota, comentario, data_avaliacao) VALUES (${id_usuario}, ${id_animacao}, ${nota}, ${comentarioAvaliacao}, '${data_avaliacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listarPorId, buscarPorUsuario, enviar };