import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     description: Returns health status of the server
 *     responses:
 *       200:
 *         description: Server is healthy
 */
router.get('/health', (req, res) => {
  res.send('Server is healthy');
});

export default router;
