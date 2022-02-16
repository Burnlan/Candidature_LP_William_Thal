//this router uses express
const express = require('express');
const router = express.Router();

//we import the controller for the sauces
const biscuitCtrl = require('../controllers/biscuit_controller');


//we set all routes for the sauce 
router.get('/getbiscuits', biscuitCtrl.getBiscuits);
router.delete('/deletebiscuit:id', biscuitCtrl.deleteBiscuit);
router.post('/addbiscuit', biscuitCtrl.addBiscuit);
/*
router.post('/editbiscuit:id', biscuitCtrl.editBiscuits);
router.get('/fightbiscuits', biscuitCtrl.fightBiscuits);
*/

//we export everything
module.exports = router;