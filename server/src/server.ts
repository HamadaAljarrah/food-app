import express, { json, urlencoded } from "express";
import { MenuRouter } from "./menu/menu.router";
import { ServerApp } from "./common/ServerApp";
import cors from "cors"


const app = express();
app.use(json({limit: "1mb"}));
app.use(urlencoded({limit: "1mb", extended: true }));
app.use(cors({origin:"*"}))



const routes = [
    new MenuRouter(app),
]

const server = new ServerApp(app, 4000, routes, "Main server")

server.listen();