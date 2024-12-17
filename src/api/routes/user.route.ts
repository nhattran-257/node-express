import { Router } from "express";
import { getAllUsers, addUser } from "../controllers/user.controller";

const router = Router();

router.get("/", getAllUsers);
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
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
 */

router.post("/", addUser);
/**
 * @swagger
 * /api/users:
 *  post:
 */

export default router;
