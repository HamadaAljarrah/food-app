import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { sendResponse } from "../common/services/common.services";
import { MenuDocument } from "./menu.model";

const menu_schema = Joi.object<MenuDocument>({
    name: Joi.string().min(3).max(40).required(),
    category: Joi.string().min(3).max(20).required(),
})

class MenuMiddleware {

    public async validateMenuBody(req: Request, res: Response, next: NextFunction) {
        const result = menu_schema.validate(req.body);
        if (result.error) {
            const response = { status: 409, success: false, message: result.error.details[0].message };
            return sendResponse(res, response);
        }
        next();
    }


}

export default new MenuMiddleware();
