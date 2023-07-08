INSERT INTO department (id, department_name)
VALUES (1, "IT"), (2, "Customer Service"), (3, "Finance"), (4, "Human Resources (HR)");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Software Developer', 90000.00, 1),
(3, 'Customer Service Specialist', 50000.00, 2),
(5, 'Financial Analyst', 77000.00, 3),
(8, 'HR Manager', 85000.00, 4);


INSERT INTO employee (id,  first_name, last_name, role_id, manager_id)
VALUES  (1, 'carlos', 'dela cruz', 1, NULL),  -- manager
(2, 'amelia', 'annex', 3, NULL),  -- manager
(3, 'kay', 'sacados', 5, 1),  -- manager is carlos
(4, 'rose', 'alice', 8, 2)   -- manager is amelia
