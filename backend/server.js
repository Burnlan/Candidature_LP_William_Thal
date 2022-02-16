//we import our modules
const express = require("express");
const mongoose = require("mongoose");
const db = require("./db");

//init app using express
const app = express();

//allows use of JSON with express
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//we connect to the mongodb database
mongoose.connect(db)
    .then(() => console.log("connected to the database"));

const server = app.listen(8666, function(){
    console.log("listening to requests on port 8666");
});