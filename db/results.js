//Providing the combined information from schema, seeds and index.js to compile lists being called
// const { removeListener } = require("process");
// const { rollback } = require("../db/autoLogin");
const connection = require("../db/autoLogin");

class db {
    constructor(connection) {
        this.connection = connection;
    }
//Find ALL Employees
findAllEmployees() {
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.dept_id = department.name LEFT JOIN  employee manager on employee.manager_id = manager.id;"
        );
    }

//Find ALL Managers
findAllManagers(employeeId) {
    return this.connection.promise().query("SELECT id, first_name, last_name FROM employee WHERE id != ?", employeeId
    );
}
//Find ALL Departments
findAllDepartments() {
    return this.connection.promis().query("SELECT department.name, department.id FROM department;"
    );
}

//Find ALL Roles
findAllRoles() {
    return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.dept_id = department.id;"
    );
}

//Add Department
addDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
}
//Add Role
addRole(role) {
    return this.connection.promise().query("INSERT INTO department SET ?", role);
}

//Add Employee
addEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
}

//Update Employee Roll
updateEmployee(employeeId, roleId) {
    return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?" [roleId, employeeId]
    );
}
}

module.exports = new db(connection);