CREATE DATABASE animotion;
USE animotion;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    apelido VARCHAR(45),
    imagem_perfil VARCHAR(255)
);

CREATE TABLE categoria (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE animacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL UNIQUE,
    sinopse VARCHAR(500) NOT NULL,
    ano_lancamento INT,
    imagem VARCHAR(500),
    classificacao INT,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);

CREATE TABLE genero (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE genero_da_animacao (
	id_genero INT,
    id_animacao INT,
    FOREIGN KEY (id_genero) REFERENCES genero(id),
    FOREIGN KEY (id_animacao) REFERENCES animacao(id),
    PRIMARY KEY (id_genero, id_animacao)
);

CREATE TABLE avaliacao (
	id_usuario INT,
    id_animacao INT,
    nota INT NOT NULL,
    comentario VARCHAR(1000),
    data_avaliacao DATE NOT NULL,
    PRIMARY KEY (id_usuario, id_animacao),
    FOREIGN KEY (id_usuario) REFERENCES usuario (id),
    FOREIGN KEY (id_animacao) REFERENCES animacao (id)
);