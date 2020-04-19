const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kda',
    insecureAuth : true
});
mysqlConnection.connect((error)=>{
    if(!error){
        console.log('connection à la BDD reussit');
    }else{
        console.log(`Erreur de connection à la BDD: ${error}`);
    }
});

module.exports = mysqlConnection;