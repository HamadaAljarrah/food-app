import { Application } from "express";
import { RouteConfig } from "../common/RouteConfig";
import menuController from "./menu.controller";
import menuMiddleware from "./menu.middleware";

export class MenuRouter extends RouteConfig {

    constructor(app: Application) {
        super(app, "MenuRoutes");
    }

    routerConfig(): Application {
        this.app.route('/menus').get([menuController.getAllMenus]);
        this.app.route('/menu/:_id').get([menuController.getMenu]);
        this.app.route('/menu').post([menuMiddleware.validateMenuBody, menuController.createMenu]);
        this.app.route('/menu/:_id').put([menuMiddleware.validateMenuBody, menuController.updateMenu]);
        this.app.route('/menu/:_id').delete([menuController.deleteMenu]);

        return this.app;
    }


}