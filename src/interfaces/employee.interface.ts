/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - position
 *         - department
 *         - email
 *         - phone
 *         - branchId
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the employee
 *           example: 1
 *         name:
 *           type: string
 *           description: Full name of the employee
 *           example: John Doe
 *         position:
 *           type: string
 *           description: Employee's job position
 *           example: Software Engineer
 *         department:
 *           type: string
 *           description: Department the employee belongs to
 *           example: IT
 *         email:
 *           type: string
 *           format: email
 *           description: Employee's email address
 *           example: john.doe@example.com
 *         phone:
 *           type: string
 *           description: Employee's contact number
 *           example: "9876543210"
 *         branchId:
 *           type: integer
 *           description: ID of the branch where the employee works
 *           example: 3
 */
export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: number;
}
