const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

/*
Métodos HTTP:

Get: Buscar um informação do back-end
Post: Criar um informação no back-end
Put: ALterar uma informação no back-end
Delete: Deletar uma informação no back-end
____________________________________________________________________________
Tipo de parêmetros:

Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parêmetros utilidos para identificar recursos
Request Body: Corpo de requisição, utilizado para criar ou alterar recursos
____________________________________________________________________________
Banco de dados

SQL: MySQL, SQLLite, PostgreSQL, Oracle, Microsft SQL Server
NoSQL: MongoDB, CouchDB, etc.

Driver: SELECT * FROM users
Query Builder: table('users').select('*')

*/

app.listen(3333);
