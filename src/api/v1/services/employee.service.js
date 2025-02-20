"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeesByBranchId = exports.getEmployeesByDept = exports.getEmployeeById = exports.getAllEmployees = void 0;
// Preloaded Employee Data
var employees = [
    { id: 1, name: "Alice Johnson", position: "Branch Manager", department: "Management", email: "alice.johnson@pixell-river.com", phone: "604-555-0148", branchId: 1 },
    { id: 2, name: "John Doe", position: "Software Engineer", department: "IT", email: "john.doe@example.com", phone: "9876543210", branchId: 3 },
    { id: 3, name: "Maria Garcia", position: "Loan Officer", department: "Loans", email: "maria.garcia@pixell-river.com", phone: "204-555-0193", branchId: 3 }
];
// Get all employees
var getAllEmployees = function () { return employees; };
exports.getAllEmployees = getAllEmployees;
// Get employee by ID
var getEmployeeById = function (id) {
    return employees.find(function (emp) { return emp.id === id; });
};
exports.getEmployeeById = getEmployeeById;
// Get employees by department
var getEmployeesByDept = function (department) {
    return employees.filter(function (emp) { return emp.department.toLowerCase() === department.toLowerCase(); });
};
exports.getEmployeesByDept = getEmployeesByDept;
// Get employees by branch
var getEmployeesByBranchId = function (branchId) {
    return employees.filter(function (emp) { return emp.branchId === branchId; });
};
exports.getEmployeesByBranchId = getEmployeesByBranchId;
// Create an employee
var createEmployee = function (employee) {
    employees.push(employee);
    return employee;
};
exports.createEmployee = createEmployee;
// Update an employee
var updateEmployee = function (id, updates) {
    var index = employees.findIndex(function (emp) { return emp.id === id; });
    if (index === -1)
        return null;
    employees[index] = __assign(__assign({}, employees[index]), updates);
    return employees[index];
};
exports.updateEmployee = updateEmployee;
// Delete an employee
var deleteEmployee = function (id) {
    var index = employees.findIndex(function (emp) { return emp.id === id; });
    if (index === -1)
        return false;
    employees.splice(index, 1);
    return true;
};
exports.deleteEmployee = deleteEmployee;
