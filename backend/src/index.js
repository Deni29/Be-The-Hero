const express = require('express'); // a const express acaba recebendo todas funcionalidades do express
const cors = require('cors'); // determina quem tera acesso a aplicação
const routes = require('./routes'); // ./ referência a mesma pasta do arquivo index

const app = express(); // a aplicação

app.use(cors());
app.use(express.json()); // todas as requisições teram o corpo json
app.use(routes);

app.listen(3333); // ouvir apartir da porta 3333



