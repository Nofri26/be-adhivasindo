import {Router} from 'express';
import {UserController} from '../controllers/userController';
import {UserValidations} from '../validations/userValidations';
import validationMiddleware from '../middlewares/validationMiddleware';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';

const route = Router();

/**
 * @swagger
 * /user/show:
 *   get:
 *     summary: Show user
 *     description: Show a user by their user ID.
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         description: The user ID (UUID).
 *         schema:
 *           type: string
 *           format: uuid
 *           example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *     responses:
 *       200:
 *         description: User found successfully.
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
 *                   example: "User found"
 *                 data:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       format: uuid
 *                       example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *                     name:
 *                       type: string
 *                       example: "test"
 *                     email:
 *                       type: string
 *                       example: "test@example.com"
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
route.get('/show', authenticationMiddleware, UserValidations.showValidation, validationMiddleware, UserController.show);

/**
 * @swagger
 * /user/update:
 *   put:
 *     summary: Update user
 *     description: Update a user by their user ID.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - name
 *               - email
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *                 example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *               name:
 *                 type: string
 *                 example: "Test"
 *               email:
 *                 type: string
 *                 example: "test@example.com"
 *     responses:
 *       200:
 *         description: User updated successfully
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
 *                   example: "User updated"
 *                 data:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       format: uuid
 *                       example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       example: "johndoe@example.com"
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
route.put('/update', authenticationMiddleware, UserValidations.updateValidation, validationMiddleware, UserController.update);

/**
 * @swagger
 * /user/delete:
 *   delete:
 *     summary: Delete user
 *     description: Delete a user by their user ID.
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         description: The user ID (UUID) to delete.
 *         schema:
 *           type: string
 *           format: uuid
 *           example: "f099f47d-7d40-4012-ba33-799bec163d18"
 *     responses:
 *       200:
 *         description: User deleted successfully.
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
 *                   example: "User deleted"
 *                 data:
 *                   type: object
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
route.delete('/delete', authenticationMiddleware, UserValidations.deleteValidation, validationMiddleware, UserController.delete);

export default route;
