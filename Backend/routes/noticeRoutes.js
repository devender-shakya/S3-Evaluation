const express = require('express');
const Notice = require('../models/Notice');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    try {
        const notice = new Notice({ ...req.body, user: req.user._id });
        await notice.save();
        res.status(201).send(notice);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const query = category ? { category } : {};
        const notices = await Notice.find(query).populate('user', 'name email');
        res.status(200).send(notices);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const notice = await Notice.findOne({ _id: req.params.id, user: req.user._id });
        if (!notice) {
            return res.status(404).send('Notice not found');
        }
        Object.assign(notice, req.body);
        await notice.save();
        res.status(200).send(notice);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const notice = await Notice.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!notice) {
            return res.status(404).send('Notice not found');
        }
        res.status(200).send('Notice deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
