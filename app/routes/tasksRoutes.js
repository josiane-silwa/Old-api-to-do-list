const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksControllers');
//const { getAll } = require('../models/tasksModels');

//router.get('/', (req, res) => {
//    tasksController.getAll(req, res);
//});
// rota padrao
router.get('/tasks', tasksController.getAll);
//console.log(tasks);
module.exports = router;