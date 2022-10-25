import { Application } from "express";
import { RouteConfig } from "../common/RouteConfig";
import menuController from "./menu.controller";
import menuMiddleware from "./menu.middleware";

export class MenuRouter extends RouteConfig {

    constructor(app: Application) {
        super(app, "MenuRoutes");
    }

    routerConfig(): Application {
        this.app.route('/menu/:_id').get([menuController.getMenu]);
        this.app.route('/menu').post([menuMiddleware.validateMenuBody, menuController.createMenu]);
        this.app.route('/menu').put([]);
        this.app.route('/menu').delete([]);

        return this.app;
    }


}