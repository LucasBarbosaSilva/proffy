![Divulgação (1)](https://user-images.githubusercontent.com/58981172/91676260-9da68d00-eb15-11ea-971c-ce4ba3bc0eb4.jpg)
<h1 align="center">
  Next Level Week #2<br/>
  Node.js | ReactJS | React Native
</h1>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/HigorSnt/proffy?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/HigorSnt/proffy?style=flat-square">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1?style=flat-square"><br/>
</p>
<p align="center">
  <a href="#bookmark-o-que-%C3%A9">O que é?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-exemplos-de-uso">Exemplos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mais-informações">Mais Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

## :bookmark: O que é?

O **Proffy** é uma aplicação Web e Mobile desenvolvida durante a Next Level Week com o objetivo de auxiliar na conexão entre os alunos e os professores. Logo, esta aplicação oferece aos professores a possibilidade de registrar aulas, podendo adicionar informações como a disciplina, o custo e horário e aos alunos a possibilidade de buscar pelas aulas cadastradas.
  
Este projeto foi idealizado pensando no dia **6 de agosto**, onde se comemora o **Dia Nacional dos Profissionais da Educação**.
  
Essa aplicação foi realizada durante a Next **Level Week #2**, projeto da [Rocketseat](https://rocketseat.com.br/).

## :bookmark: Exemplos de uso
![WhatsApp Image 2020-08-25 at 11 02 24 PM (2)](https://user-images.githubusercontent.com/58981172/91677326-bd8b8000-eb18-11ea-9271-b55f58e68c8a.jpeg)
![WhatsApp Image 2020-08-25 at 11 02 24 PM (1)](https://user-images.githubusercontent.com/58981172/91677329-bf554380-eb18-11ea-8313-b59c87cc585b.jpeg)
![WhatsApp Image 2020-08-25 at 11 02 24 PM](https://user-images.githubusercontent.com/58981172/91677332-c0867080-eb18-11ea-82ed-7e58a4c6d48f.jpeg)
![WhatsApp Image 2020-08-12 at 12 22 39 PM (1)](https://user-images.githubusercontent.com/58981172/91677417-ffb4c180-eb18-11ea-9870-3e350940c6e6.jpeg)
![WhatsApp Image 2020-08-12 at 12 22 39 PM](https://user-images.githubusercontent.com/58981172/91677421-02171b80-eb19-11ea-8f70-41092e206da0.jpeg)

## :rocket: Tecnologias

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Express](https://expressjs.com/)
-  [axios](https://github.com/axios/axios)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina, para rodar a aplicação mobile.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/LucasBarbosaSilva/proffy
```

2. Executando a Aplicação:

```sh
  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```


![](../header.png)

## Mais Informações

Lucas Barbosa Leite Silva – [@Lucas Barbosa](https://www.linkedin.com/in/lucas-barbosa-4076ab1a6/) – blucas.oficial@gmail.com

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE.md) para mais informações.

[https://github.com/LucasBarbosaSilva/proffy](https://github.com/LucasBarbosaSilva/proffy)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/yourname/yourproject/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
