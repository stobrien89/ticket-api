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

//Update endpoint
router.put('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(ticket);
    }catch(err) {
        console.error(err);
        res.status(400).json({
            message: err.message
        })
    }
})

//Delete endpoint
router.delete('/:id', async (req, res) => {
    try{
        const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTicket);
    }catch(err) {
        console.error(err);
        res.status(400).json({
            message: error.message
        })
    }
})
module.exports = router;
