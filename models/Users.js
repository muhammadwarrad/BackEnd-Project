// Imports
import mongoose from "mongoose";

// Initialize Schema
const Schema = mongoose.Schema;
// Schema for Users
let Users = new Schema({
    "username": {type: String, required: true},
    "email": {type: String, required: true},
    "password_digest": {type: String, required: true, select: false},
    "cart": [{type: Object}]
});
// Export Users Schema
export default mongoose.model("users", Users);
