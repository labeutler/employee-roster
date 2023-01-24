-- Starter Employee information for table from Mock-Up video found in README
USE employees_db

INSERT INTO department (id, dept_name)
VALUES 
        (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO role (id, "title", dept_id, salary)
VALUES 
        (1,"Sales Lead", 1, 100000),
        (2, "Salesperson", 1, 80000),
        (3, "Lead Engineer", 2, 150000),
        (4, "Software Engineer", 2, 120000),
        (5, "Account Manager", 3, 160000),
        (6, "Accountant", 3, 125000),
        (7, "Legal Team Lead", 4, 250000),
        (8, "Lawer", 4, 190000);

INSERT INTO employee (id, "first_name", "last_name", role_id, manager_id)
VALUES 
        (1, "John", "Doe", 1, NULL),
        (2, "Mike", "Chan", 2, 1),
        (3, "Ashley", "Rodriguez", 3, NULL),
        (4, "Kevin", "Tupik", 4, 3),
        (5, "Kunal", "Singh", 5, NULL),
        (6, "Malia", "Brown", 6, 5),
        (7, "Sarah", "Lourd", 7, NULL),
        (8, "Tom", "Allen", 8, 7);
