-- initial values for tables
INSERT INTO department (id, department_name)
VALUES (1, "IT");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Software Developer', 90000.00, 1);


INSERT INTO employee (id,  first_name, last_name, role_id, manager_id)
VALUES  (1, 'carlos', 'dela cruz', 1, NULL);  -- manager

