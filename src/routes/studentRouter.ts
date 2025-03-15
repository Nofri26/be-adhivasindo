import {Router} from 'express';
import validationMiddleware from '../middlewares/validationMiddleware';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';
import {StudentValidations} from '../validations/studentValidations';
import {StudentController} from '../controllers/studentController';

const route = Router();

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Get all students
 *     description: Get data of all students from the API.
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Get all students.
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
 *                   example: "Get all students"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       YMD:
 *                         type: string
 *                         example: "20220803"
 *                       NAME:
 *                         type: string
 *                         example: "Abigail Williams"
 *                       NIM:
 *                         type: string
 *                         example: "0178453629"
 *       422:
 *         description: Failed validation request
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Internal server error
 */
route.get('/', authenticationMiddleware, validationMiddleware, StudentController.index);

/**
 * @swagger
 * /student/search:
 *   get:
 *     summary: Search for a student
 *     description: Search for a student by a specific key (e.g., NIM, YMD, etc.) from the API.
 *     tags: [Student]
 *     parameters:
 *       - in: query
 *         name: key
 *         required: true
 *         description: The field to search (e.g., NIM, YMD)
 *         schema:
 *           type: string
 *           example: "NIM"
 *       - in: query
 *         name: value
 *         required: true
 *         description: The value to search for
 *         schema:
 *           type: string
 *           example: "0178453629"
 *     responses:
 *       200:
 *         description: Get a student.
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
 *                   example: "Get a student"
 *                 data:
 *                   type: object
 *                   properties:
 *                     YMD:
 *                       type: string
 *                       example: "20220803"
 *                     NAME:
 *                       type: string
 *                       example: "Abigail Williams"
 *                     NIM:
 *                       type: string
 *                       example: "0178453629"
 *       422:
 *         description: Failed validation request
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Internal server error
 */
route.get('/search', authenticationMiddleware, StudentValidations.searchValidation, validationMiddleware, StudentController.search);

export default route;
