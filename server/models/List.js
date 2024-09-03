const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    name: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true},
});

const List = mongoose.model("List", ListSchema);
module.exports = List;
