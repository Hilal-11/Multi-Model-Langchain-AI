const express = require('express')
const router = express.Router();


const signUp = require('../controllers/');
const login = require('../controllers/');
const logout = require('../controllers/');
const userDetails = require('../controllers/')


router.post('/signUp', signUp);
router.post('/login' , login);
router.post('/logout' , logout);
router.post('/getUserInfo' , userDetails);


module.exports = router;
