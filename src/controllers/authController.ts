import {UserModel} from '../models/userModel';
import {AuthService} from '../services/authService';
import {Request, Response} from 'express';
import {successResponse, errorResponse} from '../utils/apiResponse';

export const AuthController = {
    register: async (req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body;
            const user = new UserModel(name, email, password, null);
            const createdUser = await AuthService.register(user);

            return successResponse(res, 'User registered successfully', 201, createdUser);
        } catch (error: any) {
            return errorResponse(res, 'Registration failed', 400, error.message);
        }
    },
    login: async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body;
            const loginUser = await AuthService.login(email, password);

            return successResponse(res, 'User Login Successfully', 200, loginUser);
        } catch (error: any) {
            return errorResponse(res, 'Login failed', 400, error.message);
        }
    },
    logout: async (req: Request, res: Response) => {
        try {
            const {userId} = req.body;
            const userLogin = await AuthService.logout(userId);

            return successResponse(res, 'User Logout Successfully', 200, userLogin);
        } catch (error: any) {
            return errorResponse(res, 'Logout failed', 400, error.message);
        }
    },
};
