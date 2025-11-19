var database = require("../database/config");

function listarPorId(id) {
    var instrucaoSql = `
    SELECT
        usuario.apelido apelido,
        usuario.imagem_perfil imagem_perfil,
        avaliacao.nota nota,
        avaliacao.comentario comentario,
        avaliacao.data_avaliacao data
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

function enviar(id_animacao, id_usuario, nota, comentario) {
    let comentarioAvaliacao = comentario == '' ? null : `'${comentario}'`

    var instrucaoSql = `
        INSERT INTO avaliacao (id_usuario, id_animacao, nota, comentario) VALUES (${id_usuario}, ${id_animacao}, ${nota}, ${comentarioAvaliacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listarPorId, enviar };