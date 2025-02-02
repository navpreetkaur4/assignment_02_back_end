import { Request, Response } from "express";
import { createBranch, getAllBranches, getBranchById, updateBranch, deleteBranch } from "../services/branch.service";

// Create a new branch
export const addBranch = (req: Request, res: Response): void => {
  const { name, address, phone } = req.body;

  if (!name || !address || !phone) {
    res.status(400).json({ error: "All fields (name, address, phone) are required." });
    return;
  }

  const newBranch = createBranch({
    id: Date.now(),
    name,
    address,
    phone,
  });

  res.status(201).json(newBranch);
};

// Fetch all branches
export const fetchBranches = (req: Request, res: Response): void => {
  const branches = getAllBranches();
  res.status(200).json(branches);
};

// Fetch a branch by ID
export const fetchBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }

  const branch = getBranchById(id);
  if (!branch) {
    res.status(404).json({ error: "Branch not found" });
    return;
  }

  res.status(200).json(branch);
};

// Update branch
export const modifyBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }

  const updates = req.body;
  if (!updates.name && !updates.address && !updates.phone) {
    res.status(400).json({ error: "At least one field (name, address, phone) is required." });
    return;
  }

  const updatedBranch = updateBranch(id, updates);
  if (!updatedBranch) {
    res.status(404).json({ error: "Branch not found" });
    return;
  }

  res.status(200).json(updatedBranch);
};

// Delete branch
export const removeBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }

  const success = deleteBranch(id);
  if (!success) {
    res.status(404).json({ error: "Branch not found" });
    return;
  }

  res.status(200).json({ message: "Branch deleted successfully" });
};
