import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Users = new Schema({
    "username": {type: String, required: true},
    "password": {type: String, required: true},
    "cart": [{type: Object}],
    "loggedIn": {type: Boolean}
});

export default mongoose.model("users", Users);
