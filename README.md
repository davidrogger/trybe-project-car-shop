# Sobre

## Seção: `APIs OO e NoSQL`

- Ao contrário do MySQL que usamos um driver e depois usamos ORM, lidando com NoSQL ja foi abordado diretamente algo similar a ORM, no caso ODM que lida com dados estruturados em bandos NoSQL, apresentando o mongoose, configurações e o uso com orientação a objetos, validando dados usando o Zod.

#
<div align="center">
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-car-shop/readme-update/readme-imgs/project_top.webp">
    <img width="30%" src="./readme-imgs/project_top.webp">
  </a>
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-car-shop/readme-update/readme-imgs/project_mid.webp">
    <img width="30%" src="./readme-imgs/project_mid.webp">
  </a>
  <a href="https://raw.githubusercontent.com/davidrogger/trybe-project-car-shop/readme-update/readme-imgs/project_bot.webp">
    <img width="30%" src="./readme-imgs/project_bot.webp">
  </a>
</div>

>*Imagens da documentação swagger*
#
## Projeto: `Car Shop`

- Uma API Restful seguindo modelo de orientação a objetos com um CRUD para rotas de carros e motos.

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

- Foi o projeto mais "fino" que desenvolvi na trybe, onde abordei bastante a ideia de não acoplamento com as classes, gerando uma classe genérica, que foi possivel "reaproveitar" em duas rotas distintas, com resultados similares,  aplicando na classe um schema diferente na para cada rota, gerando as modificações necessárias, ainda assim infelizmente mantive o zod acoplado, mas nada evita de criar um interface generica, que usaria os metodos do zod, para caso eu quizesse usar um joi, criando um adapter onde sigo uma assinatura padrão, e realizo as autenticação seja com zod, joi, ou qualquer outra forma de validação.

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

  - [x] - ~~Criar aplicação com base nos requisitos da trybe.~~ ![data](https://badgen.net/badge/delivery/16-09-2022/green)

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
  >Verifique os containers, usando o comando `docker ps` no terminal. Deve aparecer dois containers com o nome de *car_shop* e *car_shop_db*.
  </details>

  <details>
    <summary>
      <strong>
        🗂 Acessando as Rotas
      </strong>
    </summary>

  >Para acessar e testar as rotas:
  >1. Usando algum API Cliente, conforme citado nas configurações mínimas.
  >2. Acessando a documentação gerada pelo swagger `localhost:3001/api-docs`.

  <details>
  <summary>
      <span>Endpoint <code>/cars</code></span>
  </summary>

  ## POST - `localhost:3001/cars`

  > - Rota responsável cadastrar novos carros.
  > - Para cadastrar o carro, é necessário realizar uma requisição POST para URL: `localhost:3001/cars` contendo um corpo json com:
  > - `model` Deve conter no mínimo 3 caracteres, com o modelo do carro.
  > - `year` Deve estrar em 1900 e 2022, com o ano do carro.
  > - `color` Deve ter no mínimo 3 caracteres, com a cor do carro.
  > - `status` Opcional, Deve ser um boolean, definindo se o cara está apto para venda.
  > - `buyValue` Deve ser um valor positivo, com o preço de venda do carro.
  > - `doorsQty` Deve ser um número entre 2 e 4, com a quantidade de portas do carro.
  > - `seatsQty` Deve ser um número entre 2 e 7, com a quantidade de assentos no carro.
    > ### Exemplo:
  >```
  >{
  >  "model": "Toyota Corolla DX",
  >  "year": 1994,
  >  "color": "Prata",
  >  "status": true,
  >  "buyValue": 104500,
  >  "doorsQty": 4,
  >  "seatsQty": 5
  >}
  >```
  > ### Status:
  > - **`201`**: Retorna um json com os dados da partida cadastrada.
  > - **`400`**: Retorna um json com a mensagem apontando preenchimento está incorreto.
  > - **`500`**: Retorna um json com a mensagem indicando o error que ocorreu internamente no servidor.

  # GET - localhost:3001/cars

  > - Rota responsável mostrar todos carros cadastrados.
  > - Para mostrar os carros, é necessário realizar uma requisição GET para URL: `localhost:3001/cars`.
  > ### Status:
  > - **`200`**: Retorna um json com todos carros cadastrados.
  > - **`500`**: Retorna um json com a mensagem indicando o error que ocorreu internamente no servidor.

  # GET - localhost:3001/cars/:id

  > - Rota responsável mostrar detalhes de um carros cadastrado.
  > - Para mostrar o detalhe do carro, é necessário realizar uma requisição GET para URL: `localhost:3001/cars/id`.
  > ### Status:
  > - **`200`**: Retorna um json com os detalhes do carro pela id especificado.
  > - **`400`**: Retorna um json com a falha de requisição ocorrida, normalmente pelo formato incorreto do id.
  > - **`404`**: Retorna um json com messagem de `Object not found`.
  > - **`500`**: Retorna um json com a mensagem indicando o error que ocorreu internamente no servidor.

  ## PUT - `localhost:3001/cars/:id`

  > - Rota responsável atualizar cadastro de um carro.
  > - Para realizar a atualização, é necessário realizar uma requisição PUT para URL: `localhost:3001/cars/:id` com o ID do carro desejado contendo um corpo json com as atualizações desejadas:
  > - `model` Deve conter no mínimo 3 caracteres, com o modelo do carro.
  > - `year` Deve estrar em 1900 e 2022, com o ano do carro.
  > - `color` Deve ter no mínimo 3 caracteres, com a cor do carro.
  > - `status` Opcional, Deve ser um boolean, definindo se o cara está apto para venda.
  > - `buyValue` Deve ser um valor positivo, com o preço de venda do carro.
  > - `doorsQty` Deve ser um número entre 2 e 4, com a quantidade de portas do carro.
  > - `seatsQty` Deve ser um número entre 2 e 7, com a quantidade de assentos no carro.
    > ### Exemplo:
  >```
  >{
  >  "model": "Toyota Corolla DX",
  >  "year": 1994,
  >  "color": "Prata",
  >  "status": true,
  >  "buyValue": 104500,
  >  "doorsQty": 4,
  >  "seatsQty": 5
  >}
  >```
  > ### Status:
  > - **`200`**: Retorna um json com as atualizações realizadas.
  > - **`400`**: Retorna um json com a falha de requisição ocorrida, apontando o local do erro.
  > - **`404`**: Retorna um json com messagem de `Object not found`.
  > - **`500`**: Retorna um json com a mensagem indicando o error que ocorreu internamente no servidor.

  # DELETE - localhost:3001/cars/:id

  > - Rota responsável deletar um cadastro de carro por seu id.
  > - Para deletar, é necessário realizar uma requisição DELETE para URL: `localhost:3001/cars/id`.
  > ### Status:
  > - **`204`**: Retorna status 204 no content.
  > - **`400`**: Retorna um json com a falha de requisição ocorrida, normalmente pelo formato incorreto do id.
  > - **`404`**: Retorna um json com messagem de `Object not found`.
  > - **`500`**: Retorna um json com a mensagem indicando o error que ocorreu internamente no servidor.

  </details>

  <details>
  <summary>
      <span>Endpoint <code>/motorcycles</code></span>
  </summary>

  >## ⚠️ Obserção:
  > Segue exatamente os mesmos endpoints de cars, mudando somente o nome do endpoint para motorcycles, e quando lidando com envio de um corpo json é substituido seus campos `doorsQty` e `seatsQty` por, `category` e `engineCapacity`.

  ## POST - `localhost:3000/motorcycles`

  > - Rota responsável cadastrar motos.
  > - Para cadastrar a moto, é necessário realizar uma requisição POST para URL: `localhost:3001/motorcycle` contendo um corpo json com:
  > - `model` Deve conter no mínimo 3 caracteres, com o modelo do carro.
  > - `year` Deve estrar em 1900 e 2022, com o ano do carro.
  > - `color` Deve ter no mínimo 3 caracteres, com a cor do carro.
  > - `status` Opcional, Deve ser um boolean, definindo se o cara está apto para venda.
  > - `buyValue` Deve ser um valor positivo, com o preço de venda do carro.
  > - `category` Deve ser uma das três opções, `Street`, `Custom` ou `Trail`.
  > - `engineCapacity` Deve ser um número positivo, até 2500.
    > ### Exemplo:
  >```
  >{
  >  "model": "Toyota Corolla DX",
  >  "year": 1994,
  >  "color": "Prata",
  >  "status": true,
  >  "buyValue": 104500,
  >  "category": 4,
  >  "engineCapacity": 1000
  >}
  >```
  > ### Status:
  > - **`201`**: Retorna um json com os dados da partida cadastrada.
  > - **`400`**: Retorna um json com a mensagem apontando preenchimento está incorreto.
  > - **`500`**: Retorna um json com a mensagem indicando o error que ocorreu internamente no servidor.

  </details>

  </details>

</details>

#

<div align="right">
  <img src="https://badgen.net/badge/last%20update/23-02-2023/blue">
</div>
