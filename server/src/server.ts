import express, { json, urlencoded } from "express";
import { MenuRouter } from "./menu/menu.router";
import { ServerApp } from "./common/ServerApp";
import cors from "cors"


const app = express();
app.use(json({ limit: "5mb" }));
app.use(urlencoded({ limit: "5mb", extended: true }))
app.use(cors())



const routes = [
    new MenuRouter(app),
]

const server = new ServerApp(app, 4000, routes, "Main server")

server.listen();