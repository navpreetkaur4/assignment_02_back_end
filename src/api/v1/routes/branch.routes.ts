import express, { Router } from "express";
import {
  addBranch,
  getBranches,
  getBranch,
  modifyBranch,
  removeBranch,
} from "../controllers/branch.controller";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Branches
 *   description: Operations related to branch management
 */

/**
 * @swagger
 * /api/v1/branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     description: Adds a new branch to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Branch successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *       400:
 *         description: Invalid request data
 */
router.post("/", addBranch);

/**
 * @swagger
 * /api/v1/branches:
 *   get:
 *     summary: Get all branches
 *     tags: [Branches]
 *     description: Retrieve a list of all branches
 *     responses:
 *       200:
 *         description: Successfully retrieved branch list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   address:
 *                     type: string
 *                   phone:
 *                     type: string
 */
router.get("/", getBranches);

/**
 * @swagger
 * /api/v1/branches/{id}:
 *   get:
 *     summary: Get a branch by ID
 *     tags: [Branches]
 *     description: Retrieve details of a branch using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The branch ID
 *     responses:
 *       200:
 *         description: Successfully retrieved branch
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *       404:
 *         description: Branch not found
 */
router.get("/:id", getBranch);

/**
 * @swagger
 * /api/v1/branches/{id}:
 *   put:
 *     summary: Update a branch
 *     tags: [Branches]
 *     description: Modify details of an existing branch using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The branch ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Branch successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Branch not found
 */
router.put("/:id", modifyBranch);

/**
 * @swagger
 * /api/v1/branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branches]
 *     description: Remove a branch record using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The branch ID
 *     responses:
 *       200:
 *         description: Branch successfully deleted
 *       404:
 *         description: Branch not found
 */
router.delete("/:id", removeBranch);

export default router;
