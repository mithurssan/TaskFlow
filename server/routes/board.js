const express = require("express");
const Board = requrie("../models/Board");
const auth = require("../middleware/auth");

const router = express.Router();

//Get all boards for a user
router.get("/", auth, async (req, res) => {
    try {
        const boards = await Board.find({ owner: req.user.id });
        res.json(boards);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});


// Create a new board
router.post("/", auth, async (req, res) => {
    const { name } = req.body;

    try {
        const board = new Board({ name, owner: req.user.id });
        await board.save();
        res.json(board);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});


// Edit an existing board
router.patch("/:id", auth, async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        let board = await Board.findOne({ _id: id, owner: req.user.id });

        if (!board) {
            return res.status(404).json({ msg: "Board not found" });
        }

        if (name) {
            board.name = name;
        }

        await board.save();
        res.json(board);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});


//Delete a board
router.delete("/:id", auth, async (req, res) => {
    const { id } = req.params;

    try {
        const board = await Board.findOne({ _id: id, owner: req.user.id });

        if (!board) {
            return res.status(404).json({ msg: "Board not found" });
        }

        await board.remove();
        res.json({ msg: "Board removed" });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});
