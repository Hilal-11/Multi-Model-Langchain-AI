const nodemailer = require('nodemailer')
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: process.env.HOST_NAME,
    port: 587,
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.HOST_PASS,
    },
    secure: false,
    tls :{
        rejectUnauthorized: false   
    }
})


module.exports = transporter