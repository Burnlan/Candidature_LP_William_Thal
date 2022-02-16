//we import our modules
const express = require("express");

//init app using express
const app = express();

//allows use of JSON with express
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const server = app.listen(8666, function(){
    console.log("listening to requests on port 8666");
});