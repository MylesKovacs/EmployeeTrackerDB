const connection = require('../server');

class DB {
    constructor(connection) {
        this.connection = connection
    }
 findAllDepartments() {
     return this.connection.query (
         "SELECT * FROM department ORDER BY id"
     )
 }
 createDepartment(department) {
     return this.connection.query (
         "INSERT INTO department SET ? ", department
     );
 } 
 findAllRoles() {
     return this.connection.query (
         "SELECT * FROM roles ORDER BY id"
     );
 }
 createRole(role) {
     return this.connection.query (
         "INSERT INTO roles SET ? ", role
     )
 }
 findAllEmployees() {
     return this.connection.query (
         "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, CONCAT(manager.first_name, ' ', manager.last_name) AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
     )
 }
  // create employees
 createEmployee(employee) {
     return this.connection.query (
         "INSERT INTO employee SET ? ", employee
     );
 }
 updateEmployee(employee) {
     return this.connection.query (
         "UPDATE employee SET id='$id'", employee
     );
 }
}


module.exports = new DB(connection);