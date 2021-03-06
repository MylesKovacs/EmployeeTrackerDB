const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table')

const db = require('./db')

//main questions
const mainQuestions = [
    {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Quit",
        ],
    },
]

const addDepartmentQuestions = [
    {
        message: 'Enter the NEW department name: ',
        type: 'input',
        name: 'name'
    }
]

function addRole() {
    db.findAllDepartments().then(result => {
        if (true) {
            inquirer.prompt(
                [
                    {
                        message: 'Enter name of the new Role: ',
                        type: 'input',
                        name: 'title'
                    },
                    {
                        message: 'Enter the salary of this role: $',
                        type: 'number',
                        name: 'salary'
                    },
                    {
                        message: 'Enter the department of this role: ',
                        type: 'list',
                        name: 'department',
                        choices: result[0].map(obj => obj.id + '-' + obj.name)
                    }
                ]
            ).then(({title,salary,department}) => {
                db.addRole(title,salary,department.split('-')[0]).then(res => {
                    console.clear()
                    console.log('Role ' + res[0].insertId + ' was added')
                })
                db.findAllRoles().then(res => {
                    console.table(res[0])
                    // banner()
                    menu()
                })
            })
        }
    })
}

function addNewEmployee() {
    db.findAllRoles().then(roles => {
        db.findAllEmployees().then(managers => {
            inquirer.prompt(
                [
                    {
                        message: 'Enter the employee FIRST name: ',
                        type: 'input',
                        name: 'firstName'
                    },
                    {
                        message: 'Enter the employee LAST name: ',
                        type: 'input',
                        name: 'lastName'
                    },
                    {
                        message: 'Enter the employees role id: ',
                        type: 'list',
                        name: 'role',
                        choices: roles[0].map(obj => obj.id + '-' + obj.title)
                    },
                    {
                        message: 'Enter the id of the employees manager: ',
                        type: 'list',
                        name: 'manager',
                        choices: managers[0].map(obj => obj.id + '-' + obj.firstName + ' ' + obj.lastName)
                    }
                ]
            ).then(({firstName, lastName, role, manager}) => {
                db.addEmployee(firstName,lastName,role.split('-')[0],manager.split('-')[0]).then(res =>  {
                    console.clear()
                    console.log('Employee ' + res[0].insertId + ' was added')
                })
                db.findAllEmployees().then(res => {
                    console.table(res[0])
                    // // banner()
                    menu()
                })
            })
        })
    })
}

function updateAnEmployeeRole() {
    db.findAllRoles().then(roles => {
        db.findAllEmployees().then(employees => {
            inquirer.prompt(
                [
                    {
                        message: 'Which employee are you updating?: ',
                        type: 'list',
                        name: 'employee',
                        choices: employees[0].map(obj => obj.id + '-' + obj.firstName + ' ' + obj.lastName)
                    },
                    {
                        message: 'Enter the NEW role id for this employee: ',
                        type: 'list',
                        name: 'role',
                        choices: roles[0].map(obj => obj.id + '-' + obj.title)
                    }
                ]
            ).then(({ employee, role }) => {
                db.updateEmployeeRole(employee.split('-')[0], role.split('-')[0]).then(res => {
                    console.clear
                    console.log('Employee ' + res[0].insertId + ' role was updated')
                })
                db.findAllEmployees().then(res => {
                    console.table(res[0])
                    // banner()
                    menu()
                })
            })
        })
    })
}

function menu() {
    inquirer.prompt(mainQuestions).then(({action}) => {
        if (action === "View Departments") {
            db.findAllDepartments().then(res => {
                console.clear()
                console.table(res[0])
                // banner()
                menu()
            })
        } else if (action === "View Roles") {
            db.findAllRoles().then(res => {
                console.clear()
                console.table(res[0])
                // banner()
                menu()
            });
        } else if (action === "View Employees") {
            db.findAllEmployees().then(res => {
                console.clear()
                console.table(res[0])
                // banner()
                menu()
            })
        } else if (action === "Add Department") {
            inquirer.prompt(addDepartmentQuestions).then(({name}) => {
                db.addDepartment(name).then(res => {
                    console.clear()
                    console.log('Department ' + res[0].insertId + ' was added')
                })
                db.findAllDepartments().then(res => {
                    console.table(res[0])
                    // banner()
                    menu()
                })
            })
        } else if (action === "Add Role") {
            addRole()   

        } else if (action === "Add Employee") {
            addNewEmployee()

        } else if (action === "Update Employee Role") {
            updateAnEmployeeRole()
            
        } else if (action === "Quit") {
            return db.endConnection()
        }
    })
}

inquirer.prompt(
    [
        {
            name: 'startDB',
            message: 'Welcome shall we begin? ',
            type: 'confirm',
            default: 'true'
        }
    ]).then(({startDB }) => {
        if (!startDB) {
            db.endConnection()
            return;
        }
        // banner() 
        menu()
    })