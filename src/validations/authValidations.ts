import {body} from 'express-validator';

export const AuthValidations = {
    registerValidation: [
        body('name').notEmpty().withMessage('Name is required'),
        body('name')
            .isLength({
                min: 3,
                max: 100,
            })
            .withMessage('Name must be at least 3 characters'),

        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Valid email is required'),

        body('password').notEmpty().withMessage('Password is required'),
        body('password')
            .isLength({
                min: 6,
                max: 225,
            })
            .withMessage('Password must be at least 6 characters'),
    ],
    loginValidation: [
        body('email').notEmpty().withMessage('Email is required'),
        body('email').isEmail().withMessage('Valid email is required'),

        body('password').notEmpty().withMessage('Password is required'),
        body('password')
            .isLength({
                min: 6,
                max: 225,
            })
            .withMessage('Password must be at least 6 characters'),
    ],
    logoutValidation: [body('userId').notEmpty().withMessage('Invalid credentials')],
};
