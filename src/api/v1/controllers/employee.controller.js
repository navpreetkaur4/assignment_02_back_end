"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmployee = exports.modifyEmployee = exports.addEmployee = exports.getEmployeesByBranch = exports.getEmployeesByDepartment = exports.getEmployee = exports.getEmployees = void 0;
var employee_service_1 = require("../services/employee.service");
// Get all employees
var getEmployees = function (req, res) {
    var employees = (0, employee_service_1.getAllEmployees)();
    res.status(200).json(employees);
};
exports.getEmployees = getEmployees;
// Get an employee by ID
var getEmployee = function (req, res) {
    var id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid employee ID" });
        return;
    }
    var employee = (0, employee_service_1.getEmployeeById)(id);
    if (!employee) {
        res.status(404).json({ error: "Employee not found" });
        return;
    }
    res.status(200).json(employee);
};
exports.getEmployee = getEmployee;
// Get employees by department
var getEmployeesByDepartment = function (req, res) {
    var department = req.params.department;
    var employees = (0, employee_service_1.getEmployeesByDept)(department);
    if (employees.length === 0) {
        res.status(404).json({ error: "No employees found in this department" });
        return;
    }
    res.status(200).json(employees);
};
exports.getEmployeesByDepartment = getEmployeesByDepartment;
// Get employees by branch
var getEmployeesByBranch = function (req, res) {
    var branchId = Number(req.params.branchId);
    if (isNaN(branchId)) {
        res.status(400).json({ error: "Invalid branch ID" });
        return;
    }
    var employees = (0, employee_service_1.getEmployeesByBranchId)(branchId);
    if (employees.length === 0) {
        res.status(404).json({ error: "No employees found in this branch" });
        return;
    }
    res.status(200).json(employees);
};
exports.getEmployeesByBranch = getEmployeesByBranch;
// Add a new employee
var addEmployee = function (req, res) {
    var _a = req.body, name = _a.name, position = _a.position, department = _a.department, email = _a.email, phone = _a.phone, branchId = _a.branchId;
    if (!name || !position || !department || !email || !phone || !branchId) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }
    var newEmployee = (0, employee_service_1.createEmployee)({
        id: Date.now(),
        name: name,
        position: position,
        department: department,
        email: email,
        phone: phone,
        branchId: branchId,
    });
    res.status(201).json(newEmployee);
};
exports.addEmployee = addEmployee;
// Update an existing employee
var modifyEmployee = function (req, res) {
    var id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid employee ID" });
        return;
    }
    var updates = req.body;
    var updatedEmployee = (0, employee_service_1.updateEmployee)(id, updates);
    if (!updatedEmployee) {
        res.status(404).json({ error: "Employee not found" });
        return;
    }
    res.status(200).json(updatedEmployee);
};
exports.modifyEmployee = modifyEmployee;
// Delete an employee
var removeEmployee = function (req, res) {
    var id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid employee ID" });
        return;
    }
    var success = (0, employee_service_1.deleteEmployee)(id);
    if (!success) {
        res.status(404).json({ error: "Employee not found" });
        return;
    }
    res.status(200).json({ message: "Employee deleted successfully" });
};
exports.removeEmployee = removeEmployee;
