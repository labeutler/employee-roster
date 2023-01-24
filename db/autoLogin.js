// Adding link for auto login when looking for lists
const mysql = require("mysql2");

//Connecting to database
const login = mysql.createConnection(
    {
        host: 'localhost',
        //MySQL ursername
        user: 'root',
        password: 'Houghton2018!',
        database: 'employees'
    });

module.exports = login;
