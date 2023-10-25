const Employees = require('./Employees.js')

class Manager {
    #employeesManaged
    constructor(department,employeesManaged) {
        this.department = department
        this.#employeesManaged = employeesManaged
    }
}

module.exports = {
    Manager,
}