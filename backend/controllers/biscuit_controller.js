//the controller requires the model it controls
const Biscuit = require('../models/biscuit_model');

//get all biscuits from database
exports.getBiscuits = (req, res, next) => {
    //we check in the db everything that's a biscuit
    Biscuit.find()
        //if successfull, we return our find in JSON
        .then(biscuit => res.status(200).json(biscuits))
        //if unsuccessfull, we return an error
        .catch(error => res.status(404).json({ error }));
};