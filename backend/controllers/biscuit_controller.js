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
    //We create a new biscuit using the json data in the request
    const biscuit = new Biscuit({
        ...req.body
    });
    //now we add the biscuit to the database
    biscuit.save()
    res.status(200).send();
};

exports.editBiscuit = (req, res, next) => {
    //we update the biscuit with the data in the body
    Biscuit.updateOne({_id: req.params.id}, {...req.body}, function(err) {
        if(err){
            res.send(err)
        }
        res.status(200).send();
    })
}