var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, sobrenome, email, senha, apelido, imagem_perfil FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, apelido, email, senha) {
    var apelidoVar = apelido.trim() == '' ? null : `'${apelido}'`

    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, apelido, email, senha) VALUES ('${nome}', '${sobrenome}', ${apelidoVar}, '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPerfil(id_usuario, usuario) {
    let imagem_perfil = usuario.imagem == null ? null : `${usuario.imagem}`

    var instrucaoSql = `
        UPDATE usuario SET 
            nome = '${usuario.nome}', 
            sobrenome = '${usuario.sobrenome}', 
            senha = '${usuario.senha}', 
            apelido = '${usuario.apelido}', 
            imagem_perfil = ${imagem_perfil}
        WHERE id = ${id_usuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarPerfil
};