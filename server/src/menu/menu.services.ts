import { ServerResponse } from "../common/services/common.services";
import Menu, { MenuDocument } from "./menu.model";




class MenuServices {

    public async getMenuById(_id: string): Promise<ServerResponse> {
        try {
            const result = await Menu.findById(_id);
            if (result != null) {
                return {
                    status: 200,
                    success: true,
                    message: "Menu was found",
                    data: result
                }
            }
            return {
                status: 404,
                success: false,
                message: "Menu was not found",
            }
        } catch (error) {
            return {
                status: 500,
                success: false,
                message: "Menu was not found",
            }
        }
    }

    public async createMenu(data: MenuDocument) {
        try {
            const result = await Menu.create(data);
            return {
                status: 200,
                success: true,
                message: "Menu was create",
                data: result
            }
        } catch (error) {
            return {
                status: 500,
                success: false,
                message: "Couldn't create menu",
            }
        }


    }

}
export default new MenuServices();