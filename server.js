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
      switch (answer.action) {
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


//will try to get this to work once im done
const viewEmployee = () => {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.log("View Employee");
    console.table(res);
    tracker();
  });
};
