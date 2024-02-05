const express = require('express');
const mongoose = require('mongoose');
const RestaurantRouter = require('./RestaurantRouter');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('PASTE_YOUR_CONNECTION_STRING_HERE', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
});

app.use(RestaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });
