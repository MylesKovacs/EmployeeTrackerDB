const {prompt} = require('inquirer');
const db = require('./db');
require('console.table')



async function userPrompts() {
    const {userChoices} = await prompt([
        {
            type: "list",
            name: (userChoices),
            message: "What would you like to do?",
            choices: [
                {
                name: "View all departments",
                value: "View dep"
                },
                {
                name: "Add a department",
                value: "Add dep"
                },
                {
                name: "View all roles",
                value: "View roles"
                },
                {name: "Add a role"
                value: "Add role"
                },
                {
                name: "View all employees",
                value: "View emp"
                },
                {
                name: "Add an employee",
                value: "Add emp"
                },
                {
                name: "Update an employee",
                value: "Update emp"
                }
            ]
        }
    ]);



switch(userChoices) {
    case "view dep":
        return viewAllDepartments();
    case "add dep":
        return addDepartment();
    case "view roles":
        return viewAllRoles();
    case "add role":
        return addRole();
    case "view emp":
        return viewAllEmployees();
    case "add emp":
        return addEmployee();
    case "update emp":
        return updateEmployee();
}   
}

async function viewAllDepartments() {
    const departments = await db.findAllDepartments();
    console.log(departments);
    userPrompts();
}

async function addDepartment() {
    const department = await db.createDepartment();
    console.log(department);
    userPrompts();
}

async function viewAllRoles() {
    const roles = await db.findAllRoles();
    console.log(roles);
    userPrompts();
}

async function addRole() {
    const role = await db.createRole();
    console.log(role);
    userPrompts();
}

async function viewAllEmployees() {
    const employees = await db.findAllEmployees();
    console.log(employees);
    userPrompts();
}

async function addEmployee() {
    const employee = await db.createEmployee();
    console.log(employee);
    userPrompts();
}

async function updateEmployee() {
    const employee = await db.updateEmployee();
    console.log(employee);
    userPrompts();
}




// // request to view all departments
// //*table showing dept names and ids*
// Department.get('/', (req, res) => {
    

// });


// // request to view all roles
// //*table showing job title, role ID, that roles department, and the salary*
// role.get('/', (req, res) => {

// });

// // request to view all employees
// //*table showing emloyee ID, first and last name, title, departments, salaries, 
// //and reporting manager*
// employee.get('/', (req, res) => {

// });


// // request to add a department
// // Prompt user for name and then create department
// Department.post('/', (req, res) => {

// });


// // request to add a role
// // Prompt user for name, salary, and department of the role, then add to database
// role.post('/', (req, res) => {

// });

// // request to add an employee
// // Prompt for first/last name, role, manager, then add to database
// employee.post('/', (req, res) => {

// });


// // request to update an employee role
// // Prompt for which employee, then their new role. Push to database
// employee.put('/', (req, res) => {

// });