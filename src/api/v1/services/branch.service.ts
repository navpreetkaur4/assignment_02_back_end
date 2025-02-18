export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
}

// Sample Data for Branches
const branches: Branch[] = [
  { id: 1, name: "Vancouver Branch", address: "1300 Burrard St, Vancouver, BC, V6Z 2C7", phone: "604-456-0022" },
  { id: 2, name: "Edmonton Branch", address: "7250 82 Ave NW, Edmonton, AB, T6B 0G4", phone: "780-468-6800" },
  { id: 3, name: "Winnipeg Branch", address: "1 Portage Ave, Winnipeg, MB, R3B 2B9", phone: "204-988-2402" }
];

// Get all branches
export const getAllBranches = (): Branch[] => branches;

// Get branch by ID
export const getBranchById = (id: number): Branch | undefined => {
  return branches.find(branch => branch.id === id);
};

// Create a new branch
export const createBranch = (branch: Omit<Branch, "id">): Branch => {
  const newBranch: Branch = { id: Date.now(), ...branch };
  branches.push(newBranch);
  return newBranch;
};

// Update a branch
export const updateBranch = (id: number, updates: Partial<Branch>): Branch | null => {
  const index = branches.findIndex(branch => branch.id === id);
  if (index === -1) return null;
  branches[index] = { ...branches[index], ...updates };
  return branches[index];
};

// Delete a branch
export const deleteBranch = (id: number): boolean => {
  const index = branches.findIndex(branch => branch.id === id);
  if (index === -1) return false;
  branches.splice(index, 1);
  return true;
};
