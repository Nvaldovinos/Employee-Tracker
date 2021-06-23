USE employee_trackerDB;


INSERT INTO department (name) VALUES ('Computer Engineering');
INSERT INTO department (name) VALUES ('Software Engineering');
INSERT INTO department (name) VALUES ('Information Systems');
INSERT INTO department (name) VALUES ('Information Science');

INSERT INTO role (title, salary, department_id) VALUES ('CS Lead', 30, 3);
INSERT INTO role (title, salary, department_id) VALUES ('SE Lead', 35, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Manager', 40, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Supervisor', 45, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES('Naomi', 'Valdovinos', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES('Angel', 'Flores', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES('Hayden', 'Tillhof', 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES('David', 'Alfaro', 1);