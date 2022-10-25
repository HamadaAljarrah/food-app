import express, { json, urlencoded } from "express";
import { MenuRouter } from "./menu/menu.router";
import { ServerApp } from "./common/ServerApp";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const routes = [
    new MenuRouter(app),
]

const server = new ServerApp(app, 4000, routes, "Main server")

server.listen();