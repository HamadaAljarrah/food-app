import { Request, Response } from "express";
import { sendResponse } from "../common/services/common.services";
import menuServices from "./menu.services";

class MenuController {

    public async getMenu(req: Request, res: Response): Promise<void> {
        const { _id } = req.params;
        const result = await menuServices.getMenuById(_id);
        sendResponse(res, result);
    }

    public async createMenu(req: Request, res: Response): Promise<void> {
        const result = await menuServices.createMenu(req.body);
        sendResponse(res, result);
    }


}

export default new MenuController();