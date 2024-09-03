const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    createdAt: {type: Date, default: Date.now}
});

const Board = mongoose.model("Board", BoardSchema);
module.exports = Board;
