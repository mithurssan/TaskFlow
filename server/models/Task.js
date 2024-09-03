const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {type: String, required: true},
    list: {type: mongoose.Schema.Types.ObjectId, ref: "List", required: true},
});

const Task = mongoose.model("Task", TaskSchema)
module.exports = Task;
