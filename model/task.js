const mongoose = require("mongoose");
const Schema = mongoose.Schema



const taskSchema = new Schema({
    name: String,
    status: String,
})

module.exports = mongoose.model("Task", taskSchema);