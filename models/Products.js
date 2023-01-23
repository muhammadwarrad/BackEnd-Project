// Imports
import mongoose from "mongoose";

// Initialize Schema
const Schema = mongoose.Schema;
// Schema for Products 
let Products = new Schema({
    "title": {type: String, required: true},
    "description": {type: String, required: true},
    "price": {type: Number, required: true},
    "brand": {type: String, required: true},
    "category": {type: String, required: true},
    "images": {type: String, required: true}
});
// Export Products Schema
export default mongoose.model("products", Products);
