const Ticket = require('../models/ticket');
const router = require('express').Router();

//Create endpoint
router.post('/', async (req, res) => {
    try {
        const createdTicket = await Ticket.create(req.body);
        res.status(200).json(createdTicket);
    }catch(err) {
        console.error(err);
        res.status(400).json({
            message: err.message
        })
    }
})
