const express = require('express');
const Restaurant = require('./Restaurant');
const app = express();

//Read ALL
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.find({})
    //Sorting
    //use "asc", "desc", "ascending", "descending", 1, or -1

    //Select Specific Column

    if (Object.keys(req.query).length == 1){
        const queryParam=req.query.sortby
        if (queryParam == 'asc'){
            try{
                const restaurants = await Restaurant.find({}).sort({restaurant_id:1})
                console.log(restaurants)
                res.status(200).send(restaurants);
                return
            }catch (e) {
                res.status(500).send(err);
            }
        }
        if (queryParam == 'desc'){
            try{
                const restaurants = await Restaurant.find({}).sort({restaurant_id:-1})
                console.log(restaurants)
                res.status(200).send(restaurants);
                return
            }catch (e) {
                res.status(500).send(err);
            }
        }
    }

    try {
        console.log(restaurants)
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

// return restaurants by cuisine

app.get('/restaurants/cuisine/:cuisine', async (req, res)=>{
    const cuisineParam=req.params.cuisine

    try {
        const restaurantsByCuisine = Restaurant.find({cuisine: cuisineParam})
        console.log(e)
        res.status(200).send(restaurantsByCuisine)
    }catch (e){
        console.log(e)
        res.status(500).send(e)
    }

})


module.exports=app;