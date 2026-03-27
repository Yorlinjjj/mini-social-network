const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const MONGODB_URI = 'your_mongodb_connection_string';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Mini Social Network!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});