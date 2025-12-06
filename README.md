# Animotion
Bem vindo ao Animotion!

Um projeto pessoal que une tecnologia e minha paixão por animações! Explore um imenso catálogo, avalie seus desenhos favoritos e veja as recomendações do momento!

Este projeto tem como intuito mostrar ao usuário o mundo das animações e fazer despertar nele o interesse no tema. Trago aqui recomendações pessoais de animações que adoro e que gostaria de compartilhar e incentivar outras pessoas a assistirem.

## Funcionalidades
- Cadastro e Login de usuários
- Página de perfil para atualizar informações de nome, sobrenome, apelido, senha e foto de perfil
- Página com lista de diversas animações
- Página detalhada de uma animação escolhida
- Função de avaliar e comentar sobre as animações
- Gráfico dinâmico que mostra a quantidade de cada uma das notas da animação escolhida
- Página de estatísticas com a animação com maior média de nota, mostrando informações e comparando com informações das outras animações em geral

## Tecnologias utilizadas
- HTML
- CSS
- JavasScript
- NodeJS
- ChartJS
- Express
- MySQL
- Oracle VirtualBox

## Como usar
É necessário que você tenha uma máquina com NodeJS e uma máquina virtual (VM) com MySQL com redirecionamento de portas (Porta do hospedeiro: 3307 / Porta do convidado: 3306).

1. Clone este repositório no diretório desejado da sua máquina:
```
  git clone https://github.com/lucas-eiki/projeto-individual
```

2. Dentro da pasta `site`, instale as dependências do projeto com o seguinte comando no terminal:
```
  npm i
```

3. Dentro da pasta `site/public/assets/avatar/`, crie a pasta `fotos-perfil`, que será o diretório onde o multer irá salvar as imagens de perfil dos usuários que derem o upload de alguma imagem.

4. Execute os comandos de criação das tabelas do arquivo `site/src/database/script-tabelas.sql` e logo em seguida os de inserção de dados do arquivo `site/src/database/script-inserts.sql` no MySQL da VM e deixe a máquina virtual ligada enquanto estiver executando o projeto.

5. Para inicializar o projeto, vá dentro da pasta `site` no terminal e execute o comando:
```
  npm start
```
6. Acesse o projeto no navegador na URL `http://localhost:3333`.
