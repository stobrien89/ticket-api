require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

//Mongoose connection
const MONGO_URI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('open', () => {
    console.log('Mongo is connected')
})


app.use(express.json());
app.use(cors());

app.listen(PORT, () => {console.log (`listening on port ${PORT}`)})