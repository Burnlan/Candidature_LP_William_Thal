const mongoose = require("mongoose");

//the biscuit model
const biscuitSchema = mongoose.Schema({
    name: { type: String, required: true },
    power: { type: Number, required: true }
});


module.exports = mongoose.model("Biscuit", biscuitSchema, "Biscuits");