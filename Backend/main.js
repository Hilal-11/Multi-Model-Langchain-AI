const express = require('express')
require('dotenv').config();


const app = express();

app.get('/' , (req , res) => {
    app.send('<h1> Hello Backend </h1>')
})

app.listen(PORT , () => {
    console.log(`App is runing on port no: ${PORT}`)
})