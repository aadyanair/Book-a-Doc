const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Item = require("../models/item");


router.get("/", async (req, res) => {
    const { location, specialty } = req.query;
    console.log(location + "\n" + specialty);

    try {
        const doctors = await Item.find({
                location: { $regex: new RegExp(location, 'i') },
                specialty: { $regex: new RegExp(specialty, 'i') },
            });
        
        console.log(doctors);
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Server error\n' + error });
    }
})

module.exports = router;