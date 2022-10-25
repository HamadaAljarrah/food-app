import { Response } from "express";

export type ServerResponse = {
    status: number;
    success: boolean;
    message: string;
    data?: any;
}

export const sendResponse = (res: Response, result: ServerResponse) => {
    res.status(result.status).json({
        success: result.success,
        message: result.message,
        data: result?.data
    })
}