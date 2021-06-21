const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    hot: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rm55ilyuh@',
    database: 'employee_trackerDB'
});

connection.connect((err) => {
    if (err) throw err;
    tracker();
  });

  