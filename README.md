# APP TAREFA - TESTE TÉCNICO ESIG

## Link do projeto: https://github.com/mateus-s-silva/atividade_tecnica

## O que foi feito?

Foi feita uma API REST para cadastro de tarefas. Nesta API, o usuário é capaz de cadastrar, atualizar, listar e excluir suas tarefas.  

## Ferramentas

- Java na versão 11
- Spring boot na versão 2.5.4
- Node na versão 20.11.1
- Maven para gerenciamento de dependências do backend
- PostgreSQL como banco de dados

## Dependências

- Starter Web
- JPA
- Validation
- PostgreSQL JDBC Driver
- DevTools
- Lombok

## Itens feitos
- a) Criar uma aplicação Front-end utilizando Angular na versão mais recente.
- b) Desenvolver o backend utilizando Java 11 e Spring Boot.
- c) Os endpoints devem ser em REST.
- e) Utilizar persistência em um banco de dados PostgreSQL e persistência JPA.

## Como executar

### Backend: 
- Navegue no diretório ./task até onde estiver o arquivo *pom.xml*
- Injete todas as dependências com o comando:
 ~~~shell
  mvn clean install
~~~~
- Para conexão com banco de dados, crie um servidor chamado ***task***. O JPA ficará responsável por criar as tabelas automaticamente.  
Caso queira conectar com um outro servidor, altere as configurações no arquivo *application.properties*, em /src/main/resourcers.
- Altere o nome do usuário e senha do seu servidor de banco de dados em *application.properties* 
  
  
- Agora basta navegar até ./task e executar o seguinte comando:
~~~shell
mvn spring-boot:run
~~~

### Frontend: 
- Navegue até diretório ./taskfront
- Execute o seguinte comando:
~~~shell
npm start
~~~
