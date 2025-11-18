function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var imagem_perfil = document.getElementById("imagem-perfil");
    var apelido_usuario = document.getElementById("apelido-usuario");
    var email_usuario = document.getElementById("email-usuario");

    if (email != null && nome != null) {
        imagem_perfil.src = sessionStorage.IMAGEM_PERFIL_USUARIO;
        apelido_usuario.innerHTML = sessionStorage.APELIDO_USUARIO;
        email_usuario.innerHTML = sessionStorage.EMAIL_USUARIO;
    } else {
        window.location = "../login.html";
    }
}

function finalizarSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function toggleLinksPerfil() {
    const div_perfil_links = document.getElementById('div-perfil-links')
    div_perfil_links.classList.toggle('aberto')
}