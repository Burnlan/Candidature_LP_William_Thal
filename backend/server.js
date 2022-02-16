//we import our modules
const express = require("express");
const mongoose = require("mongoose");
const db = require("./db");

//init app using express
const app = express();

//allows use of JSON with express
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//allow CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//we connect to the mongodb database
mongoose.connect(db)
    .then(() => console.log("connected to the database"));

//setup the routes
const biscuitRoutes = require('./routes/biscuit.routes');
app.use("/", biscuitRoutes);

const server = app.listen(8666, function(){
    console.log("listening to requests on port 8666");
});

