# Sobre

## Seção: `APIs OO e NoSQL`

- Ao contrário do MySQL que usamos um driver e depois usamos ORM, lidando com NoSQL ja foi abordado diretamente algo similar a ORM, no caso ODM que lida com dados estruturados em bandos NoSQL, apresentando o mongoose, configurações e o uso com orientação a objetos, validando dados usando o Zod.

#
<div align="center">
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-trybesmith/readme-update/readme-imgs/project_top.webp">
    <img height="350px" width="30%" src="./readme-imgs/project_top.webp">
  </a>
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-trybesmith/readme-update/readme-imgs/project_mid.webp">
    <img height="350px" width="30%" src="./readme-imgs/project_mid.webp">
  </a>
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-trybesmith/readme-update/readme-imgs/project_bot.webp">
    <img height="350px" width="30%" src="./readme-imgs/project_bot.webp">
  </a>
</div>

>*Imagens da documentação swagger*
#
## Projeto: `Car Shop`

- Uma API com banco NoSQL...

# Tecnologias e ferramentas usadas 🛠

![TypeScript](https://img.shields.io/badge/-TypeScript-235a97?style=flat-square&logo=typescript&logoColor=ffffff)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=ffffff)
![Docker](https://img.shields.io/badge/-Docker-fff?style=flat-square&logo=docker)
![Express](https://img.shields.io/badge/-Express-339999?style=flat-square&logo=express&logoColor=ffffff)
![MongoDB](https://img.shields.io/badge/-MongoDB-b?style=flat-square&logo=MongoDB&logoColor=ffffff)
![Mongoose](https://img.shields.io/badge/-Mongoose-A03333?style=flat-square&logo=Mongoose)
![Zod](https://img.shields.io/badge/-Zod-3068B7?style=flat-square&Zod)
![Mocha](https://img.shields.io/badge/-Mocha-896446?style=flat-square&logo=mocha&logoColor=ffffff)
![Chai](https://img.shields.io/badge/-Chai-a40802?style=flat-square&logo=chai)
![Sinon](https://img.shields.io/badge/-Sinon-a0d3a4?style=flat-square&logo=sinon)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=000)

# Desafios

- Aplicar conhecimentos de Orientação a Objetos;
- Utilização de Composição;
- Criação e utilização de Interfaces;
- Implementar classes, instâncias, atributos, métodos e objetos;
- Usar os conhecimentos de MongoBD, Typescript e POO na criação do CRUD da API.

# Conclusão

- lore

</details>

<details>
  <summary>
    <strong>
      :newspaper_roll: Requisitos solicitados durante o desenvolvimento do projeto
    </strong>
  </summary>

 
  ### Requisitos
  *Nome* | *Avaliação*
  --- | :---:
  01 - Crie a interface genérica IModel | :heavy_check_mark:
  02 - Crie a interface IVehicle | :heavy_check_mark:
  03 - Crie a interface ICar a partir da interface IVehicle | :heavy_check_mark:
  04 - Crie uma rota para o endpoint /cars onde seja possível cadastrar um novo carro | :heavy_multiplication_x:
  05 - Escreva testes para cobrir 15% da camada de Model | :heavy_multiplication_x:
  06 - Escreva testes para cobrir 15% da camada de Service | :heavy_multiplication_x:
  07 - Escreva testes para cobrir 15% da camada de Controller | :heavy_multiplication_x:
  08 - Crie uma rota para o endpoint /cars onde seja possível listar todos os carros registrados | :heavy_multiplication_x:
  09 - Crie uma rota para o endpoint /cars/id onde seja possível listar um único carro através do seu id | :heavy_multiplication_x:
  10 - Escreva testes para cobrir 30% da camada de Model | :heavy_multiplication_x:
  11 - Escreva testes para cobrir 30% da camada de Service | :heavy_multiplication_x:
  12 - Escreva testes para cobrir 30% da camada de Controller | :heavy_multiplication_x:
  13 - Crie uma rota para o endpoint /cars/id, onde é possível atualizar o registro de um carro através do seu id | :heavy_multiplication_x:
  14 - Escreva testes para cobrir 60% da camada de Model | :heavy_multiplication_x:
  15 - Escreva testes para cobrir 60% da camada de Service | :heavy_multiplication_x:
  16 - Escreva testes para cobrir 60% da camada de Controller | :heavy_multiplication_x:
  17 - Crie uma rota para o endpoint /cars/id para excluir os registros de um carro | :heavy_multiplication_x:
  18 - Crie a interface IMotorcycle a partir da interface IVehicle | :heavy_multiplication_x:
  19 - Crie uma rota para o endpoint /motorcycles onde seja possível cadastrar uma nova moto | :heavy_multiplication_x:
  20 - Crie uma rota para o endpoint /motorcycles onde seja possível listar todas as motos registradas | :heavy_multiplication_x:
  21 - Crie uma rota para o endpoint /motorcycles/id onde seja possível listar uma única moto através do seu id | :heavy_multiplication_x:
  22 - Crie uma rota para o endpoint /motorcycles/id onde é possível atualizar o registro de uma moto através do seu id | :heavy_multiplication_x:
  23 - Crie uma rota para o endpoint /motorcycles/id para excluir os registros de uma moto | :heavy_multiplication_x:



</details>

<details>
  <summary>
    <strong>
      :memo: Todo list
    </strong>
  </summary>

  - [x] - ~~Criar aplicação com base nos requisitos da trybe.~~ ![data](https://badgen.net/badge/delivery/30-07-2022/green)

</details>

<details>
  <summary>
    <strong>
      :computer: Instruções do  Projeto
    </strong>
  </summary>

> ### Importante seguir a ordem apresentada a baixo, para o funcionamento.

<details>
<summary>
  <strong>
    ⚠️ Configurações mínimas para execução do projeto
  </strong>
</summary>

  > - Sistema Operacional Distribuição Unix
  > - Node versão >= 16
  > - Docker
  > - Docker-compose versão >=1.29.2
  > - API Client ([Thunder Client](https://www.thunderclient.com/), [Insomnia](https://insomnia.rest/), [POSTMAN](https://www.postman.com/), ou algum outro de sua preferência)

  </details>

  <details>
  <summary>
    <strong>
      ⚠️ Inicie o docker-compose
    </strong>
  </summary>

  >Após clonar o respositório para iniciar o docker compose, você deve dentro da pasta raiz do projeto usar o comando: `docker-compose up -d`
  >Verifique os containers, usando o comando `docker ps` no terminal. Deve aparecer dois containers com o nome de *trybesmith* e *trybesmith_db*.
  </details>

  <details>
    <summary>
      <strong>
        🗂 Acessando as Rotas
      </strong>
    </summary>

  >Para acessar e testar as rotas:
  >1. Usando algum API Cliente, conforme citado nas configurações mínimas.
  >2. Acessando a documentação gerada pelo swagger `localhost:3000/api-docs`.

  <details>
  <summary>
      <span>Endpoint <code>/cars</code></span>
  </summary>

  ## POST - `localhost:3000/orders`

  </details>

  </details>

</details>

#

<div align="right">
  <img src="https://badgen.net/badge/last%20update/22-02-2023/blue">
</div>
