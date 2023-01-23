const mongoose = require("mongoose");
const Schema = mongoose.Schema


const staffSchema = new Schema({
    name: String,
    email: String, 
});

module.exports =  mongoose.model("User", staffSchema);