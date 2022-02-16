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
};

exports.fightBiscuit = (req, res, next) => {
    //we find all the biscuits
    Biscuit.find(function(err, biscuits) {
        if(err) {
            res.send(err)
        }
        //if we don't have enough biscuits we return a failed fight
        if(biscuits.length < 1){
            res.status(200).send("Not enough biscuits to fight")
        }
        //we create 2 teams
        let teamCream = "";
        let teamChoco = "";
        //we keep track of each teams power
        let creamPower = 0;
        let chocoPower = 0;
        //we randomly assign buiscuits to team
        for(biscuit in biscuits){
            //we flip a coin for each biscuit (only possible values are 0 adn 1)
            if(Math.round(Math.random()) == 0){
                teamCream+=biscuits[biscuit].name+", ";
                creamPower += biscuits[biscuit].power;
            } else {
                teamChoco+=biscuits[biscuit].name+", ";
                chocoPower += biscuits[biscuit].power;
            }
        }

        //We declare the winners using a switch
        let winningTeam = creamPower - chocoPower;
        let winner = "";
        if(winningTeam > 0){
             winner = "Team Cream won";
        }else if(winningTeam < 0){
             winner = "Team Choco won";
        }else {
             winner = "Draw, nobody won";
        }
        //Now we send back a string of the results
        const results = winner+" !\nTeam Cream : "+teamCream+"\nTeam Choco : "+teamChoco;
        res.status(200).json(results)

    });
};