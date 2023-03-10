# Employee-Roster

## Description

This app will allow you to be able to see a complete list of your employees, with the ability to sort them by employee, department or job title. You will also be able to add additional employees and provide their first and last name, title, department, their manager and their income. As well as, deleting employees that are no longer with you.  If needed, you can add additional departments.

By doing this project, I have learned how to use SQL to add databases and lists.  How to enter into and modify them.  As well as coding them through vscode and the command line.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company.  
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
## Table of Contents (Optional)

N/A

## Installation

Open the file, then in your command line, type "npm install"
followed by, "npm run seeds",
followed by, "npm start"

Once done, you will be prompted to answer questions and see the results of your Employee lists, Department lists, and Role lists.  

## Usage

[GitHub Link](https://github.com/labeutler/employee-roster)

[![Watch Video](/Recording%20%235.mp4)](/Recording%20%235.mp4)


The video clip above will walk you through what happens when you click on the different options.

Just follow the directions in installation, and you will see what comes next.  

## Credits

[Stack Overflow](https://stackoverflow.com/questions/36547292/use-promise-to-process-mysql-return-value-in-node-js)

[CodeShack](https://codeshack.io/super-fast-php-mysql-database-class/)

[W3Resource.com](https://www.w3resource.com/node.js/nodejs-mysql.php)

[w3resource constraints](https://www.w3schools.com/mysql/mysql_constraints.asp)

[Helper with ERROR's in .sql](https://www.rathishkumar.in/2016/01/how-to-solve-mysql-error-code-1062.html)

[Helper with creating tables and partitioning](https://dev.mysql.com/doc/refman/8.0/en/partitioning-list.html)


Chris Baird, Tutor

## MIT License

[MIT License](https://choosealicense.com/licenses/mit/)

---