const connection = require('./connection');
console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_DB);
const bodyParser = require('body-parser');

//console.log(connection);
//const ressql = connection.query('SELECT * FROM tasks') ;
//console.log(ressql);

/*async function getAll(req, res) {
    //const [tasks] = await connection.execute('SELECT * FROM tasks');
    //const [tasks] = await connection.query('SELECT * FROM tasks');
    //  const [tasks] = connection.query('SELECT * FROM tasks');
    //connection.query('SELECT * FROM tasks');
    
    connection.query('SELECT * FROM tasks', (err, tasks) => {
        //console.log(tasks);
        return tasks;
    }) ;*/
    
    //async function getAll(_req, res) => {
    const getAll = async(_req, res) => {
    //const [tasks] = await connection.execute('SELECT * FROM tasks');
    /*    connection.query('SELECT * FROM tasks', (err, tasks) => {
                return tasks;
                //console.log(tasks);
        });
        console.log(tasks);*/
    };
    
    //console.log(tasks);
//};
//console.log(tasks);

module.exports = {
    getAll,
};

