const { model, Schema } = require('mongoose');

const ticketSchema = new Schema ({
    title: String,
    source: String,
    assignee: String,
    tags: [{ type: String }] 
});

module.exports = model('Ticket', ticketSchema);

