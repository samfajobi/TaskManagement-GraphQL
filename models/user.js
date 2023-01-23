const mongoose = require("mongoose");


const userSchema = new mongoose({
    name: String,
    email: String, 
});