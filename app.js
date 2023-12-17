const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const tasksRoutes = require('./app/routes/tasksRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3306;
const tasksDb = require('./app/models/tasksModels');
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'json'}));

//         endpoint, rota
app.use(tasksRoutes);
//


module.exports = app;