// Adding link for auto login when looking for lists
const mysql = require("mysql2");
// const { connection } = require("./results");

//Connecting to database
const login = mysql.createConnection(
    {
        host: 'localhost',
        //MySQL ursername
        user: 'root',
        password: 'Houghton2018!',
        database: 'employees_db'
    });

    login.connect(function (err) {
        if (err) throw err;
    });

module.exports = login;
