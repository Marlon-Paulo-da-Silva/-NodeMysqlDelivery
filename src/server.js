require('dotenv').config({path: 'variaveis.env'});

const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use('/api',routes);


app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
});