"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var employee_controller_1 = require("../controllers/employee.controller");
var router = express_1.default.Router();
/**
 * @swagger
 * /api/v1/employees:
 *   get:
 *     summary: Retrieve all employees
 *     tags: [Employees]
 *     description: Retrieve a list of all employees.
 *     responses:
 *       200:
 *         description: Successfully retrieved the employee list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Employee"
 */
router.get("/", employee_controller_1.getEmployees);
/**
 * @swagger
 * /api/v1/employees/{id}:
 *   get:
 *     summary: Retrieve an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the employee.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Employee"
 *       404:
 *         description: Employee not found.
 */
router.get("/:id", employee_controller_1.getEmployee);
/**
 * @swagger
 * /api/v1/employees/department/{department}:
 *   get:
 *     summary: Get employees by department
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: department
 *         required: true
 *         schema:
 *           type: string
 *         description: The department name
 *     responses:
 *       200:
 *         description: Employees found.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Employee"
 *       404:
 *         description: No employees found in this department.
 */
router.get("/department/:department", employee_controller_1.getEmployeesByDepartment);
/**
 * @swagger
 * /api/v1/employees/branch/{branchId}:
 *   get:
 *     summary: Get employees by branch
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employees found.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Employee"
 *       404:
 *         description: No employees found in this branch.
 */
router.get("/branch/:branchId", employee_controller_1.getEmployeesByBranch);
/**
 * @swagger
 * /api/v1/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Employee"
 *     responses:
 *       201:
 *         description: Employee created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Employee"
 */
router.post("/", employee_controller_1.addEmployee);
/**
 * @swagger
 * /api/v1/employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Employee"
 *     responses:
 *       200:
 *         description: Employee updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Employee"
 *       404:
 *         description: Employee not found.
 */
router.put("/:id", employee_controller_1.modifyEmployee);
/**
 * @swagger
 * /api/v1/employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee deleted successfully.
 *       404:
 *         description: Employee not found.
 */
router.delete("/:id", employee_controller_1.removeEmployee);
exports.default = router;
