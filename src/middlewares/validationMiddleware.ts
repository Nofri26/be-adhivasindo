import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';
import {errorResponse} from '../utils/apiResponse';

const validationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return errorResponse(res, 'Validation failed', 422, errors.array());
    }

    next();
};

export default validationMiddleware;
