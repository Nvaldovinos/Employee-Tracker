const inquirer = require('inquirer');
const mysql = require('mysql');
// const table = require('console.table');

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

const tracker = () => {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do? ',
        choices: [
            'Add Employee',
            'View Employee',
            'Add Department',
            'View Departmanet',
            'View Role',
            'Update Employee Role',
            'QUIT'
        ]
    }).then((answer) => {
        switch (answer.action) {
            case 'Add Employee: ':
                addEmplpoyee();
                // console.log('this works');
                break;
            case 'View Employee':
                vieeEmployee();
                break;
            case 'Add Department':
                addDepartment();
                break;

            case 'View Department':
                viewDepartment();
                break;

            case 'View role':
                viewRole();
                break;

            case 'Update Employee Role':
                updateEmployee();
                break;

            case 'QUIT':
                connectiom.end();
                break;
        }
    });
};


