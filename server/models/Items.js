const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    store: String,
    price: Number
});

module.exports = mongoose.model('Item', itemSchema);