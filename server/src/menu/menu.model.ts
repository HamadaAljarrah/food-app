import { Schema } from "mongoose";
import mongoServices from "../common/services/mongo.services";


export type MenuDocument = {
    name: string;
    category: string;
}

const MenuSechema = new Schema<MenuDocument>({
    name: { type: String, required: true },
    category: { type: String, required: true },

})

const Menu = mongoServices.getInstance().model<MenuDocument>("Menu", MenuSechema);
export default Menu;