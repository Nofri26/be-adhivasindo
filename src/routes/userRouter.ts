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
 *     description: show a user by their user ID
 *     tags: [User]
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
 *         description: User show successfully
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
 *     description: update a user by their user ID
 *     tags: [User]
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
 *         description: User update successfully
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
 *     description: delete a user by their user ID
 *     tags: [User]
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
 *         description: User delete successfully
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
