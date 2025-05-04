const express = require('express')
const router = express.Router();


const signUp = require('../controllers/signUp');
const login = require('../controllers/login');
const logout = require('../controllers/logout');
const userDetails = require('../controllers/getUserDetails')


router.post('/signUp', signUp);
router.post('/login' , login);
router.post('/logout' , logout);
router.post('/getUserInfo' , userDetails);


module.exports = router;
