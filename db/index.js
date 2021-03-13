const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection
    }
 findAllEmployees() {
     return this.connection.query (
         "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, CONCAT(manager.first_name, ' ', manager.last_name) AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
     )
 }
  // one for all managers
  


  // create employees
 createEmployee(employee) {
     return this.connection.query (
         "INSERT INTO employee SET ? ", employee
     );
 }

  // remove an empl;oyee using their ID


  // update an employees role


  // update an employees manager

  // 
}


module.exports = new DB(connection);