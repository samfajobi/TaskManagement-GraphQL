const mongoose = require("mongoose");
const Schema = mongoose.Schema


const staffSchema = new Schema({
    name: {type: String},
    email: {type: String}, 
    age: {type: Number},
});


module.exports =  mongoose.model("Staff", staffSchema);