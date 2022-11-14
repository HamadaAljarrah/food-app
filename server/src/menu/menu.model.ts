import { Schema } from "mongoose";
import mongoServices from "../common/services/mongo.services";


export type MenuDocument = {
    name: string;
    category: string;
    description: string;
    price: number;
    image: string;
    _id?: string;
}

const MenuSechema = new Schema<MenuDocument>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
})

const Menu = mongoServices.getInstance().model<MenuDocument>("Menu", MenuSechema);
export default Menu;