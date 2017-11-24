const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeMysql'
});
const executeQuery = (query)=>{
    return new Promise((resolve,reject)=>{
        connection.query(query, (error, results, fields)=>{
            if(error) reject(error);
            resolve(results);
        })
    });
}
const initDatabase = ()=>{
    connection.query(`create table if not exists User(id int not null auto_increment, firstName varchar(255),
        lastName varchar(255), email varchar(255), primary key (id), unique key(email));`, (err) => {
        if (err) throw err;
    });
}
initDatabase();

exports.ConnectionService = {
    connection: connection,
    executeQuery: executeQuery
}