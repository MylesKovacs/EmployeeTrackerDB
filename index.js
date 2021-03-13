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
                name: "View all employees",
                value: "View all"
                },
                {// this is where another option will go}
            ]
        }
    ]);



switch(userChoices) {
    case "view all":
        return viewAllEmployees();
    case "(next value)"
}   
}


async function viewAllEmployees() {
    const employees = await db.findAllEmployees();
    console.log(employees);
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