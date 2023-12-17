const tasksModels = require('../models/tasksModels');

const getAll = async (_req, res) => {
    const tasks = await tasksModels.getAll();
    //return res.status(200).send({mensagem: "Tudo ok, api criada!!!"});
    
    return res.status(200).json(tasks);
};
//console.log(getAll);

module.exports = {
    getAll,
};