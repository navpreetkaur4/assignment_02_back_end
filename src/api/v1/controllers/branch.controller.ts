import { Request, Response } from "express";
import {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../services/branch.service";

// Get all branches
export const getBranches = (req: Request, res: Response): void => {
  const branches = getAllBranches();
  res.status(200).json(branches);
};

// Get a branch by ID
export const getBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }

  const branch = getBranchById(id);
  if (!branch) {
    res.status(404).json({ error: `Branch with ID ${id} not found` });
    return;
  }

  res.status(200).json(branch);
};

// Add a new branch
export const addBranch = (req: Request, res: Response): void => {
  const { name, address, phone } = req.body;

  if (!name || !address || !phone) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  const newBranch = createBranch({ name, address, phone });
  res.status(201).json(newBranch);
};

// Update an existing branch
export const modifyBranch = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }

  const updates = req.body;
  const updatedBranch = updateBranch(id, updates);

  if (!updatedBranch) {
    res.status(404).json({ error: "Branch not found" });
    return;
  }

  res.status(200).json(updatedBranch);
};

// Delete a branch
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
