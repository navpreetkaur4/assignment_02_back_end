import express, { Router } from "express";
import {
  getEmployees,
  getEmployee,
  addEmployee,
  modifyEmployee,
  removeEmployee,
  getEmployeesByDepartment,
  getEmployeesByBranch,
} from "../controllers/employee.controller";

const router: Router = express.Router();

/**
 * @openapi
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
router.get("/", getEmployees);

/**
 * @openapi
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
 *         description: Employee ID
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
router.get("/:id", getEmployee);

/**
 * @openapi
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
 *         description: Department name
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
router.get("/department/:department", getEmployeesByDepartment);

/**
 * @openapi
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
 *         description: Branch ID
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
router.get("/branch/:branchId", getEmployeesByBranch);

/**
 * @openapi
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
router.post("/", addEmployee);

/**
 * @openapi
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
 *         description: Employee ID
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
router.put("/:id", modifyEmployee);

/**
 * @openapi
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
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully.
 *       404:
 *         description: Employee not found.
 */
router.delete("/:id", removeEmployee);

export default router;
