
const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.post("/", async (req, res) => {
    const { name, description, location, date } = req.body;
    try {
        const event = await Event.create({ name, description, location, date });
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    const events = await Event.find().populate("attendees");
    res.json(events);
});

module.exports = router;
