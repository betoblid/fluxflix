# FluxFlix

## Tela inicial
projeto voltado a um site onde tem os melhores filmes considerado por @jayneSykes e @devbeto, Conta com um pequeno catálogo de filmes separados por seções de gêneros, onde poderá achar um filme para assistir.

Página inicial:
![Tela de ilustração](https://a.imagem.app/otScCJ.jpeg)

logo a baixo da página inicial encontra-se seções de filmes separados por gênero do filme, e um carrossel onde é possível scrollar com o dedo ou botão para mobile e desktop podendo usar o mouser para puxar. O botão também se encontra dos dois lados da tela, onde mobiles passa 1 card por vez e desktop passa 4 por vez.

Ilustração com todas as seções:
![Tela inicial](https://a.imagem.app/otSLlX.jpeg)

Ao clicar no filme que desejar ver, temos a informação dele e o trailer do filme ou série:
![informações da serie One Piece](https://a.imagem.app/otSRpt.jpeg)

## Perfil 

Na aba Perfil encontra-se todos os filmes que o usuário tenha curtido, o botão de curtir é uma bandeirinha como essa aqui:
![card filme](https://a.imagem.app/otStMb.jpeg)

Ao clicar, ficará todo em branco e poderá ver em seu perfil o que foi favoritado.

![Tela perfil](https://a.imagem.app/otSEBQ.jpeg)

Como podemos ver, há um filme já favoritado, Aqui mostrará todos os filmes favoritados e se desfavoritar, ele sumirá do perfil.

## Pesquisar

Na seção pesquisar podemos encontrar todos os filmes cadastrados até o momento, podendo favoritar ou desfavoritar, até mesmo clicar no filme para ver mais informações do filme, podemos pesquisar o nome do filme ou gênero do filme. Caso não seja encontrado nenhum filme uma mensagem será passada, tem tratamento de texto então pode digitar em caixa alta ou baixa que não terá problema para listar os filmes:

![Tela pesquisar](https://a.imagem.app/otSIX1.jpeg)

## Cadastro de filmes

Há uma sessão de cadastro de filmes, onde é possível cadastrar o filme no banco de dados graças ao nosso projeto ser full-stack, os dados é enviado para uma api em json e os dados são tratados, e caso não tenha nenhum erro, ele é salvo no nosso banco de dados.

Nossa plataforma não tem um streaming em tempo real, então usamos a do youtube. Para registrar um filme usamos o campo id com o id do video do youtube, nome do filme ou série, a plataforma que ela se encontra e caso tenha mais de duas usamos virgulas e categoria. Só é possível uma categoria de gênero de filme, e se tiver um campo errado uma mensagem aparecerá na tela indicando onde está errado.

Tela Cadastro de filme:
![cadastro de filme](https://a.imagem.app/otSQQW.jpeg)


## Tecnologias

- React-Query
- css
- html
- JavaScript
- Node js
- Express
- React-Slick
- axios
- React
- React-Router

## Clonagem de repositório 

Para clonar basta usar o comando abaixo:

```sh
    git clone https://github.com/betoblid/fluxflix.git
```

## License

license MIT