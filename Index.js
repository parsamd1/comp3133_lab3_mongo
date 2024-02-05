const express = require('express');
const mongoose = require('mongoose');
const RestaurantRouter = require('./RestaurantRouter');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://john123:john123@cluster0.sqtw7uq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
});

app.use(RestaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });
