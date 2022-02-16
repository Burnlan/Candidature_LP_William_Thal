//the controller requires the model it controls
const Biscuit = require('../models/biscuit_model');

//get all biscuits from database
exports.getBiscuits = (req, res, next) => {
    //we check in the db everything that's a biscuit
    Biscuit.find(function(err, biscuits) {
        if(err) {
            res.send(err)
        }
        res.status(200).json(biscuits);
    });
};
//delete a biscuit using it's id
exports.deleteBiscuit = (req, res, next) => {
    //we delete the biscuit using it's id
    Biscuit.deleteOne({_id: req.params.id}, function (err) {
        if (err) {
            res.send(err)
        }
        res.status(200);
    }); 
};

//add a biscuit
exports.addBiscuit = (req, res, next) => {
    //we get the JSON that is sent to the API
    const data = JSON.parse(req.body.biscuit);
    //We create a new biscuit using the data
    const biscuit = new Biscuit({
        ...data
    });
    //now we add the biscuit to the database
    biscuit.save()
};