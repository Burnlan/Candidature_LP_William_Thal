//this router uses express
const express = require('express');
const router = express.Router();

//we import the controller for the sauces
const biscuitCtrl = require('../controllers/biscuit_controller');


//we set all routes for the sauce 
router.get('/getbiscuits', biscuitCtrl.getBiscuits);
/*
router.post('/editbiscuit', biscuitCtrl.editBiscuits);
router.delete('/deletebiscuit', biscuitCtrl.delBiscuit);
router.get('/fightbiscuits', biscuitCtrl.fightBiscuits);
*/

//we export everything
module.exports = router;