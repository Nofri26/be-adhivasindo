export const successResponse = (res: any, message: string, statusCode: number = 200, data: any = null) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

export const errorResponse = (res: any, message: string, statusCode: number = 400, error: any = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};
