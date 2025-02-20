"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBranch = exports.modifyBranch = exports.addBranch = exports.getBranch = exports.getBranches = void 0;
var branch_service_1 = require("../services/branch.service");
// Get all branches
var getBranches = function (req, res) {
    var branches = (0, branch_service_1.getAllBranches)();
    res.status(200).json(branches);
};
exports.getBranches = getBranches;
// Get a branch by ID
var getBranch = function (req, res) {
    var id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid branch ID" });
        return;
    }
    var branch = (0, branch_service_1.getBranchById)(id);
    if (!branch) {
        res.status(404).json({ error: "Branch with ID ".concat(id, " not found") });
        return;
    }
    res.status(200).json(branch);
};
exports.getBranch = getBranch;
// Add a new branch
var addBranch = function (req, res) {
    var _a = req.body, name = _a.name, address = _a.address, phone = _a.phone;
    if (!name || !address || !phone) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }
    var newBranch = (0, branch_service_1.createBranch)({ name: name, address: address, phone: phone });
    res.status(201).json(newBranch);
};
exports.addBranch = addBranch;
// Update an existing branch
var modifyBranch = function (req, res) {
    var id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid branch ID" });
        return;
    }
    var updates = req.body;
    var updatedBranch = (0, branch_service_1.updateBranch)(id, updates);
    if (!updatedBranch) {
        res.status(404).json({ error: "Branch not found" });
        return;
    }
    res.status(200).json(updatedBranch);
};
exports.modifyBranch = modifyBranch;
// Delete a branch
var removeBranch = function (req, res) {
    var id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid branch ID" });
        return;
    }
    var success = (0, branch_service_1.deleteBranch)(id);
    if (!success) {
        res.status(404).json({ error: "Branch not found" });
        return;
    }
    res.status(200).json({ message: "Branch deleted successfully" });
};
exports.removeBranch = removeBranch;
