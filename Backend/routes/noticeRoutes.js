const express = require('express');
const Notice = require('../models/Notice');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    try {
        const notice = new Notice({ ...req.body, user: req.user._id });
        await notice.save();
        res.status(201).send(notice);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const match = {};
        if (req.query.category) {
            match.category = req.query.category;
        }
        const notices = await Notice.find(match);
        res.send(notices);
        console.log("Notice get")
    } catch (error) {
        res.status(500).send();
        console.log("Error While Getting Notices")
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const notice = await Notice.findOne({ _id: req.params.id, user: req.user._id });
        if (!notice) {
            return res.status(404).send();
        }
        res.send(notice);
        console.log("")
    } catch (error) {
        res.status(500).send();
    }
});



module.exports = router;
