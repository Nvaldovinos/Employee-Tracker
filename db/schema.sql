DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

use employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INT NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,4),
    department_id INT,
    PRIMARY KEY(id)
    
);

CREATE TABLE employee(  
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT NULL, 
     PRIMARY KEY(id)
);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;