const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  hot: "localhost",
  port: 3306,
  user: "root",
  password: "Rm55ilyuh@",
  database: "employee_trackerDB",
});

connection.connect((err) => {
  if (err) throw err;
  tracker();
});


//promts the user to choose what they would like to do. 
const tracker = () => {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "What would you like to do? ",
      choices: [
        "Add Employee",
        "View Employee",
        "Add Department",
        "View Departmanet",
        "View Role",
        "Update Employee Role",
        "QUIT",
      ],
    })
    .then((answer) => {
      switch (answer.task) {
        case "Add Employee: ":
          addEmplpoyee();
          // console.log('this works');
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;

        case "View Department":
          viewDepartment();
          break;

        case "View role":
          viewRole();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;

        case "QUIT":
          connectiom.end();
          break;
      }
    });
};


// const viewEmployee = () => {
//   connection.query('SELECT * FROM employee', (err, res) => {
//     if (err) throw err;
//     console.log("View Employee");
//     console.table(res);
//     tracker();
//   });
// };

//allows the user to add an employee 

const addEmplpoyee = () => {
    inquirer.prompt([
        {
            name: 'first',
            type: 'input',
            message: 'What is their first name? ',
        },

        {
            name: 'last', 
            type: 'input',
            message: 'What is their last name? ',
        }, 

        {
            name: 'role', 
            type: 'list',
            message: 'What is their id? ',
            choices: ['1','2','3','4']

        }
    ])
};

// allows the user to view employee 
const viewEmployee = () => {

}

//allows user to add department 

//allows user to view department

//allows user to view role

//allows user to update an employee

//exits the program. 