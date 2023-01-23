import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Products = new Schema({
    "productId": {type : Number, required: true},
    "title": {type: String, required: true},
    "description": {type: String, required: true},
    "price": {type: Number, required: true},
    "brand": {type: String, required: true},
    "category": {type: String, required: true},
    "images": {type: String, required: true}
});

export default mongoose.model("products", Products);
