import {Request, Response} from 'express';
import {userService} from '../services/userService';
import {errorResponse, successResponse} from '../utils/apiResponse';
import {UserModel} from '../models/userModel';

export const UserController = {
    show: async (req: Request, res: Response) => {
        try {
            const {userId} = req.body;
            const user = await userService.show(userId);

            return successResponse(res, 'User found', 200, user);
        } catch (error: any) {
            return errorResponse(res, 'User not found', 400, error.message);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const {userId, name, email, password} = req.body;
            const user = new UserModel(name, email, password, null);
            const updated = await userService.update(userId, user);

            return successResponse(res, 'User updated', 200, user);
        } catch (error: any) {
            return errorResponse(res, 'User update failed', 400, error.message);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const {userId} = req.body;
            const user = await userService.delete(userId);

            return successResponse(res, 'User deleted', 200, user);
        } catch (error: any) {
            return errorResponse(res, 'User delete failed', 400, error.message);
        }
    },
};
