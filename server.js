const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Strafooli84',
    database: 'employeeDB'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '/n');
});

// request to view all departments
//*table showing dept names and ids*


// request to view all roles
//*table showing job title, role ID, that roles department, and the salary*


// request to view all employees
//*table showing emloyee ID, first and last name, title, departments, salaries, 
//and reporting manager*


// request to add a department
// Prompt user for name and then create department


// request to add a role
// Prompt user for name, salary, and department of the role, then add to database


// request to add an employee
// Prompt for first/last name, role, manager, then add to database



// request to update an employee role
// Prompt for which employee, then their new role. Push to database