const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');
const branchSchema = require('../schemas/branchSchema');
const validate = require('../middleware/validate');

router.post('/', validate(branchSchema), branchController.createBranch);
router.put('/:id', validate(branchSchema), branchController.updateBranch);
router.delete('/:id', branchController.deleteBranch); // No validation needed for delete

module.exports = router;
