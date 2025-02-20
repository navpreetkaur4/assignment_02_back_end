"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranch = exports.updateBranch = exports.createBranch = exports.getBranchById = exports.getAllBranches = void 0;
// Sample Data for Branches
var branches = [
    { id: 1, name: "Vancouver Branch", address: "1300 Burrard St, Vancouver, BC, V6Z 2C7", phone: "604-456-0022" },
    { id: 2, name: "Edmonton Branch", address: "7250 82 Ave NW, Edmonton, AB, T6B 0G4", phone: "780-468-6800" },
    { id: 3, name: "Winnipeg Branch", address: "1 Portage Ave, Winnipeg, MB, R3B 2B9", phone: "204-988-2402" }
];
// Get all branches
var getAllBranches = function () { return branches; };
exports.getAllBranches = getAllBranches;
// Get branch by ID
var getBranchById = function (id) {
    return branches.find(function (branch) { return branch.id === id; });
};
exports.getBranchById = getBranchById;
// Create a new branch
var createBranch = function (branch) {
    var newBranch = __assign({ id: Date.now() }, branch);
    branches.push(newBranch);
    return newBranch;
};
exports.createBranch = createBranch;
// Update a branch
var updateBranch = function (id, updates) {
    var index = branches.findIndex(function (branch) { return branch.id === id; });
    if (index === -1)
        return null;
    branches[index] = __assign(__assign({}, branches[index]), updates);
    return branches[index];
};
exports.updateBranch = updateBranch;
// Delete a branch
var deleteBranch = function (id) {
    var index = branches.findIndex(function (branch) { return branch.id === id; });
    if (index === -1)
        return false;
    branches.splice(index, 1);
    return true;
};
exports.deleteBranch = deleteBranch;
