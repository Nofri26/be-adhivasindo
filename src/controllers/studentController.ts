import {StudentService} from '../services/studentService';
import {errorResponse, successResponse} from '../utils/apiResponse';
import {NextFunction, Request, Response} from 'express';

export const StudentController = {
    index: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const students = await StudentService.fetchAllData();
            return successResponse(res, 'Get all students', 200, students);
        } catch (error) {
            next(error);
        }
    },
    search: async (req: Request, res: Response) => {
        try {
            const {key, value} = req.body;

            const keyStr = key as string;
            const valueStr = value as string;

            const filteredStudents = await StudentService.findStudents(keyStr, valueStr);

            if (filteredStudents.length > 0) {
                return successResponse(res, 'Filtered students', 200, filteredStudents);
            } else {
                return errorResponse(res, 'No students found matching criteria', 404, {});
            }
        } catch (error: any) {
            return errorResponse(res, 'Get all students', 400, error.message);
        }
    },
};
