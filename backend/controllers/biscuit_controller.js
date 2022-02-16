//the controller requires the model it controls
const Biscuit = require('../models/biscuit_model');

//get all biscuits from database
exports.getBiscuits = (req, res, next) => {
    //we check in the db everything that's a biscuit
    Biscuit.find(function(err, biscuits) {
        if(err) {
            res.send(err)
        }
        console.log(biscuits);
    });

};