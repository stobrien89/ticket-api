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

//Read endpoint (lists all tickets)
router.get('/', async (req, res) => {
    try {
        const allTickets = await Ticket.find({});
        res.status(200).json(allTickets);
    }catch(err) {
        console.error(err);
        res.status(404).json({
            message: error.message
        })
    }
})

module.exports = router;
