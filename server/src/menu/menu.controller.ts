import { Request, Response } from "express";
import { sendResponse } from "../common/services/common.services";
import menuServices from "./menu.services";

class MenuController {

    public async getAllMenus(req: Request, res: Response): Promise<void> {
        const result = await menuServices.getAllMenus();
        sendResponse(res, result);
    }

    public async getMenu(req: Request, res: Response): Promise<void> {
        const { _id } = req.params;
        const result = await menuServices.getMenuById(_id);
        sendResponse(res, result);
    }


    public async createMenu(req: Request, res: Response): Promise<void> {
        const result = await menuServices.createMenu(req.body);
        sendResponse(res, result);
    }


    public async updateMenu(req: Request, res: Response): Promise<void> {
        const result = await menuServices.updateMenu(req.params._id, req.body);
        res.json(result);
    }


    public async deleteMenu(req: Request, res: Response): Promise<void> {
        const { _id } = req.params;
        const result = await menuServices.deleteMenu(_id);
        sendResponse(res, result);
    }


}

export default new MenuController();