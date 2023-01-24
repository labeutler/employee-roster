// Adding link for auto login when looking for lists
const mysql = require("mysql2");
//const PORT = process.env.PORT || 3001;

//Connecting to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //MySQL ursername
        user: 'root',
        password: '',
        database: 'employees'
    });

module.exports = db;
