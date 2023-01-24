const mysql = require("mysql2");
const { allowedNodeEnvironmentFlags } = require("process");
const db = require("./db");

// Required information needed:



// Create function to prompt list for what you would like to select from.
function initialPrompt() {
    prompt([
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
                break;
        }
    })
}

// In order to see the requested information, provide where it's coming from
// To View All Employees
function viewEmployees() {
    
}

// To Add Employee
function addEmployee() {

}

// To Update Employee Role
function updateEmployeeRole() {

}

// To View All Roles
function viewRoles() {

}

// To Add Role
function addRole() {

}

// To View All Departments
function viewDepartments() {

}

// To Add Department
function addDepartment() {

}

// To Quit
function quit() {

}