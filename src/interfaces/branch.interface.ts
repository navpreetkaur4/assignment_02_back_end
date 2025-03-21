/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique ID of the branch
 *           example: 1
 *         name:
 *           type: string
 *           description: Name of the branch
 *           example: Vancouver Branch
 *         address:
 *           type: string
 *           description: Address of the branch
 *           example: 1300 Burrard St, Vancouver, BC, V6Z 2C7
 *         phone:
 *           type: string
 *           description: Contact phone number of the branch
 *           example: 604-456-0022
 */
export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
}
