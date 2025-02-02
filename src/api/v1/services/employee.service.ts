export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: number;
}

const employees: Employee[] = [];

// Get all employees
export const getAllEmployees = (): Employee[] => employees;

// Get employee by ID
export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(emp => emp.id === id);
};

// Get employees by department
export const getEmployeesByDept = (department: string): Employee[] => {
  return employees.filter(emp => emp.department.toLowerCase() === department.toLowerCase());
};

// Get employees by branch
export const getEmployeesByBranchId = (branchId: number): Employee[] => {
  return employees.filter(emp => emp.branchId === branchId);
};

// Create an employee
export const createEmployee = (employee: Employee): Employee => {
  employees.push(employee);
  return employee;
};

// Update an employee
export const updateEmployee = (id: number, updates: Partial<Employee>): Employee | null => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) return null;
  employees[index] = { ...employees[index], ...updates };
  return employees[index];
};

// Delete an employee
export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
};
