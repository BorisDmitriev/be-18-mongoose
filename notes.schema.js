const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: String,
    text: String,
});

// Exportieren des Modells
module.exports = mongoose.model("notes", userSchema);
