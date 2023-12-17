const { error } = require('console');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createPool({
  
  connectionLimit: 20000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,

  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

connection.getConnection((err) => {
  if (err) {
      console.log('erro conexao para o bd...................',  err)
      return
  }
  console.log('conexao estabelecida!!!')
});

///
/*
const db_config = {
  connectionLimit: 20000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: 'localhost', //process.env.MYSQL_HOST,
  port: '3306', // process.env.PORT,
  user: 'root', // process.env.MYSQL_USER,
  password: 'root', // process.env.MYSQL_PASSWORD,
  database: 'todolist'// process.env.MYSQL_DB,
};

function handleDisconnect(){
  const connection2 = mysql.createConnection(db_config);
  console.log('entrei aqui  1 - !!!!');
  connection2.connect(function(err){
      if(err){
          console.log('erro quando conetando ao db:', err);
          setTimeout(handleDisconnect, 2000);
          console.log('passei aqui  2 - !!!!');
      }
  });

  connection2.on('error', function(err){
      console.log('db error', err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST'){
          handleDisconnect();
          console.log('passei aqui  3 - !!!!');
      }else{
          throw err;
      }
  });
}
handleDisconnect();
*/
console.log('cheguei aqui!!!!');
///

module.exports = connection;