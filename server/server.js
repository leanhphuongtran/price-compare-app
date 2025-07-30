// The ./ in front of models/Item means:
// “look inside the models folder in the current directory.”
const Item = require('./models/Items');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://admin:Giadinh0508!@pricecompare.epvoqgk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:',err));


let items = []; // TEMPORARY in-memory data


// Handle POST (save new item)
app.post ('/api/items', async(req, res) => {
    try {
        const { name, store, price } = req.body;

        // ✅ Create a new item using the Mongoose model
        // This saves the item into MongoDB. Not just temporary memory anymore 💾
        const newItem = new Item({ name, store, price: parseFloat(price)});

        // ✅ Save it to MongoDB
        await newItem.save();

        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Handle GET (show/return all saved items)
app.get ('/api/items', async(req, res) => {
    try {
        // This fetches saved items directly from MongoDB
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});


// '0.0.0.0' makes the server publicly accessible from outside
// which is perfect for deployment on Render.com
app.listen (PORT, '0.0.0.0' , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});