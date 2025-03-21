import {Router} from 'express';
import {AuthController} from '../controllers/authController';
import {AuthValidations} from '../validations/authValidations';
import validationMiddleware from '../middlewares/validationMiddleware';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';

const route = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Test
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User registered successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                       example: "Test"
 *                     email:
 *                       type: string
 *                       example: "test@example.com"
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *       422:
 *         description: Failed validation request
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Internal server error
 */
route.post('/register', AuthValidations.registerValidation, validationMiddleware, AuthController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user and return a token.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         description: User login successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User login successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Mvh1AsU4eHcJpZsWzT7Af27Re9QdDBHQ"
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *                         name:
 *                           type: string
 *                           example: "Test"
 *                         email:
 *                           type: string
 *                           example: test@example.com
 *       422:
 *         description: Failed validation request
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Internal server error
 */
route.post('/login', AuthValidations.loginValidation, validationMiddleware, AuthController.login);

/**
 * @swagger
 * /auth/logout:
 *   delete:
 *     summary: Logout user
 *     description: Logout a user by invalidating their token and user ID.
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *                 example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User logged out successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "Logged out successfully"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.delete('/logout', authenticationMiddleware, AuthValidations.logoutValidation, validationMiddleware, AuthController.logout);

export default route;
