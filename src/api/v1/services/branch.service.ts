export interface Branch {
    id: number;
    name: string;
    address: string;
    phone: string;
  }
  
  const branches: Branch[] = [];
  
  export const getAllBranches = (): Branch[] => branches;
  
  export const getBranchById = (id: number): Branch | undefined => {
    return branches.find(branch => branch.id === id);
  };
  
  export const createBranch = (branch: Branch): Branch => {
    branches.push(branch);
    return branch;
  };
  
  export const updateBranch = (id: number, updates: Partial<Branch>): Branch | null => {
    const index = branches.findIndex(branch => branch.id === id);
    if (index === -1) return null;
  
    branches[index] = { ...branches[index], ...updates };
    return branches[index];
  };
  
  export const deleteBranch = (id: number): boolean => {
    const index = branches.findIndex(branch => branch.id === id);
    if (index === -1) return false;
  
    branches.splice(index, 1);
    return true;
  };
  