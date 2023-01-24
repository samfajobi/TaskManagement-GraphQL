const mongoose = require("mongoose");
const Schema = mongoose.Schema



const taskSchema = new Schema({
    name: {type: String},
    description: {type: String},
    status: {type: String,  enum: ["Not Started", "In Progress", "Completed"]},
    staffId: {type: mongoose.Schema.Types.ObjectId, ref: "Staff"}
})


module.exports = mongoose.model("Task", taskSchema);