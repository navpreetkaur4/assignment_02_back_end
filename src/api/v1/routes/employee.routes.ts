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
 * @swagger
 * /api/v1/employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     description: Retrieve a list of all employees
 *     responses:
 *       200:
 *         description: Successfully retrieved employee list
 */
router.get("/", getEmployees);

/**
 * @swagger
 * /api/v1/employees/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The employee ID
 *     responses:
 *       200:
 *         description: Successfully retrieved employee
 *       404:
 *         description: Employee not found
 */
router.get("/:id", getEmployee);

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
 *         description: Employees found
 *       404:
 *         description: No employees found
 */
router.get("/department/:department", getEmployeesByDepartment);

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
 *         description: The branch ID
 *     responses:
 *       200:
 *         description: Employees found
 *       404:
 *         description: No employees found
 */
router.get("/branch/:branchId", getEmployeesByBranch);

/**
 * @swagger
 * /api/v1/employees:
 *   post:
 *     summary: Add a new employee
 *     tags: [Employees]
 */
router.post("/", addEmployee);

/**
 * @swagger
 * /api/v1/employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [Employees]
 */
router.put("/:id", modifyEmployee);

/**
 * @swagger
 * /api/v1/employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employees]
 */
router.delete("/:id", removeEmployee);

export default router;
