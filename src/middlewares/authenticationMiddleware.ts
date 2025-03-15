import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {errorResponse} from '../utils/apiResponse';

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return errorResponse(res, 'Unauthorized', 401, 'Token Not Found');
    }

    try {
        (req as any).user = jwt.verify(token, process.env.SECRET_KEY as string);
        next();
    } catch (error: any) {
        return errorResponse(res, 'Invalid Token', 401, error.message);
    }
};

export default authenticationMiddleware;
