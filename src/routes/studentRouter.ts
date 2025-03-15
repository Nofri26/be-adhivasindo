import {Router} from 'express';
import validationMiddleware from '../middlewares/validationMiddleware';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';
import {StudentValidations} from '../validations/studentValidations';
import {StudentController} from '../controllers/studentController';

const route = Router();

route.get('/', authenticationMiddleware, validationMiddleware, StudentController.index);
route.get('/search', authenticationMiddleware, StudentValidations.searchValidation, validationMiddleware, StudentController.search);

export default route;
