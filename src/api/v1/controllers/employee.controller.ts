import { Request, Response } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  getEmployeesByDept,
  getEmployeesByBranchId,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employee.service";

// Get all employees
export const getEmployees = (req: Request, res: Response): void => {
  const employees = getAllEmployees();
  res.status(200).json(employees);
};

// Get an employee by ID
export const getEmployee = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid employee ID" });
    return;
  }

  const employee = getEmployeeById(id);
  if (!employee) {
    res.status(404).json({ error: "Employee not found" });
    return;
  }

  res.status(200).json(employee);
};

// Get employees by department
export const getEmployeesByDepartment = (req: Request, res: Response): void => {
  const { department } = req.params;
  const employees = getEmployeesByDept(department);

  if (employees.length === 0) {
    res.status(404).json({ error: "No employees found in this department" });
    return;
  }

  res.status(200).json(employees);
};

// Get employees by branch
export const getEmployeesByBranch = (req: Request, res: Response): void => {
  const branchId = Number(req.params.branchId);
  if (isNaN(branchId)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }

  const employees = getEmployeesByBranchId(branchId);
  if (employees.length === 0) {
    res.status(404).json({ error: "No employees found in this branch" });
    return;
  }

  res.status(200).json(employees);
};

// Add a new employee
export const addEmployee = (req: Request, res: Response): void => {
  const { name, position, department, email, phone, branchId } = req.body;

  if (!name || !position || !department || !email || !phone || !branchId) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  const newEmployee = createEmployee({
    id: Date.now(),
    name,
    position,
    department,
    email,
    phone,
    branchId,
  });

  res.status(201).json(newEmployee);
};

// Update an existing employee
export const modifyEmployee = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid employee ID" });
    return;
  }

  const updates = req.body;
  const updatedEmployee = updateEmployee(id, updates);

  if (!updatedEmployee) {
    res.status(404).json({ error: "Employee not found" });
    return;
  }

  res.status(200).json(updatedEmployee);
};

// Delete an employee
export const removeEmployee = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid employee ID" });
    return;
  }

  const success = deleteEmployee(id);
  if (!success) {
    res.status(404).json({ error: "Employee not found" });
    return;
  }

  res.status(200).json({ message: "Employee deleted successfully" });
};
