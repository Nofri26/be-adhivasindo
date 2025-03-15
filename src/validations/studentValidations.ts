import {body} from 'express-validator';

export const StudentValidations = {
    searchValidation: [body('key').notEmpty().withMessage('Key query parameters are required'), body('value').notEmpty().withMessage('Value query parameters are required')],
};
