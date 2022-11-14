import { ServerResponse } from "../common/services/common.services";
import Menu, { MenuDocument } from "./menu.model";




class MenuServices {

    public async getAllMenus() {
        try {
            const result = await Menu.find();
            if (result != null) {
                return {
                    status: 200,
                    success: true,
                    message: "Menus was found",
                    data: result
                }
            }
            return {
                status: 404,
                success: false,
                message: "Menus was not found",
            }
        } catch (error) {
            return {
                status: 500,
                success: false,
                message: "Couldn't get menus",
            }
        }
    }

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

    public async updateMenu(_id: string, data: MenuDocument) {
        try {

            const result = await Menu.findOneAndUpdate({ _id }, data);
            if (result != null) {
                return {
                    status: 200,
                    success: true,
                    message: "Menu was updated",
                    data: result
                }
            }
            return {
                status: 404,
                success: false,
                message: "Menu to update was not found",
            }

        } catch (error) {
            return {
                status: 500,
                success: false,
                message: "Menu was not found",
            }
        }
    }

    public async deleteMenu(_id: string) {
        try {
            const result = await Menu.findByIdAndDelete(_id);
            if (result != null) {
                return {
                    status: 200,
                    success: true,
                    message: "Menu was delete",
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
                message: "Couldn't delete menu",
            }
        }
    }



}
export default new MenuServices();