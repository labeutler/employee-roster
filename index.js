// const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const db = require("./db/results");
require("console.table");
const PORT = process.env.PORT || 3001;
const app = express();
init();

// Required information needed:
function init() {
    initialPrompt();
}


// Create function to prompt list for what you would like to select from.
function initialPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View ALL Employees",
                    enter: "View_Employees"
                },
                {
                    name: "Add Employee",
                    enter: "Add_Employee"
                },
                {
                    name: "Update Employee Role",
                    enter: "Update_Employee_Role"
                },
                {
                    name: "View ALL Roles",
                    enter: "View_Roles"
                },
                {
                    name: "Add Role",
                    enter: "Add_Roll"
                },
                {
                    name: "View ALL Departments",
                    enter: "View_All_Departments"
                },
                {
                    name: "Add Department",
                    enter: "Add_Department"
                },
                {
                    name: "Quit",
                    enter: "Quit"
                }
            ]
        }
    ]).then(res => {
        //Call needed prompts for selection made above.
        let choice = res.choice;
        switch (choice) {
            case "View_Employees":
                viewEmployees();
                break;
            case "Add_Employee":
                addEmployee();
                break;
            case "Update_Employee_Role":
                updateEmployeeRole();
                break;
            case "View_Roles":
                viewRoles();
                break;
            case "Add_Roll":
                addRole();
                break;
            case "View_All_Departments":
                viewDepartments();
                break;
            case "Add_Department":
                addDepartment();
                break;
            case "Quit":
                quit;
        }
    })
}

// In order to see the requested information, provide where it's coming from
// To View All Employees
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employee = rows;
            console.log("\n");
            console.table(employee);
        })
        .then(() => initialPrompt());
}

// To Add Employee
function addEmployee() {
    inquirer.prompt([
        {
            name: "first_name",
            message: "Please provide employees first name:"
        },
        {
            name: "last_name",
            message: "Please provide employees last name:"
        }
    ])
        .then(res =>  {
            let firstName = res.first_name;
            let lastName = res.last_name;

            db.findAllRoles()
        .then(([rows]) => {
            let role = rows;
            const roleChoice = role.map(({ id, title }) => ({
                name: title,
                value: id
            }));

            inquirer.prompt({
                type: "list",
                name: "roleId",
                message: "What is employee's role?",
                choices: roleChoice
            })
                .then(res => {
                    let roleId = res.roleId;
                    
                db.findAllEmployees()
                    .then(([rows]) => {
                        let employee = rows;
                        const mgrId = employee.map(({
                            id, first_name, last_name 
                        }) => ({
                            name: `${first_name} ${last_name}`,
                            value: id
                        }));

                        mgrId.unshift({ name: "None", value: null });
                        inquirer.prompt({
                            type: "list",
                            name: "mgrId",
                            message: "who is the employee's manager?",
                            choices: mgrId
                        })
                            .then(res => {
                                let employee = {
                                    mgrId: res.mgrId,
                                    role_id: roleId,
                                    first_name: firstName,
                                    last_name: lastName
                                }

                                db.addEmployee(employee);
                            })
                            .then(() => console.log(
                                `${firstName} ${lastName} has been added to the database.`
                            ))
                            .then(() => initialPrompt())
                    })
                })
        })
    })
 }

// To Update Employee Role
function updateEmployeeRole() {

}

// To View All Roles
function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let role = rows;
            console.log("\n");
            console.table(role);
        })
        .then(() => initialPrompt());
}

// To Add Role
function addRole() {
    db.findAllDepartments()
        .then(([rows]) => {
            let department = rows;
            const departmentOption = department.map(({ id, name }) => ({
                name: name,
                value: id
            }));
            inquirer.prompt([
                {
                    name: "title",
                    message: "What is the title of the role?"
                },
                {
                    name: "salary",
                    message: "What is the salary for this role?"
                },
                {
                    type: "list",
                    name: departm
                }
            ])
        })
}

// To View All Departments
function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let department = rows;
            console.log("\n");
            console.table(department);
        })
        .then(() => initialPrompt());
}

// To Add Department
function addDepartment() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the department name?"
        }
    ])
        .then(res => {
            let name = res;
            db.createDepartment(name)
                .then(() => console.log(`${name.name} has been added to the database.`))
                .then(() => initialPrompt())
        })
}

// To Quit
function quit() {
    process.exit();
}

// Create a port to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});