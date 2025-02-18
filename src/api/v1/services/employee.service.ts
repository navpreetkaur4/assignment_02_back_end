export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: number;
}

// Preloaded Employee Data
const employees: Employee[] = [
  { id: 1, name: "Alice Johnson", position: "Branch Manager", department: "Management", email: "alice.johnson@pixell-river.com", phone: "604-555-0148", branchId: 1 },
  { id: 2, name: "John Doe", position: "Software Engineer", department: "IT", email: "john.doe@example.com", phone: "9876543210", branchId: 3 },
  { id: 3, name: "Maria Garcia", position: "Loan Officer", department: "Loans", email: "maria.garcia@pixell-river.com", phone: "204-555-0193", branchId: 3 }
];

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
