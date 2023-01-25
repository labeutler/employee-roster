-- Basic requirements needed for tables defined here.
-- Use of unsigned to confirm numbers are not negative
-- Use of INDEX to assist with pulling infromation from original table to another table.
-- Use of ON DELETE CASCADE to drop linked items when an item is deleted from one table, will pull from other tables when present.


DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NULL,
    dept_id INT UNSIGNED NOT NULL,
    INDEX deptId (dept_id),
    CONSTRAINT FK_department FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    INDEX roleId (role_id),
    CONSTRAINT FK_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    INDEX mgrId (manager_id),
    -- Set constraint to NULL if manager is deleted, non is required.
    CONSTRAINT FK_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;