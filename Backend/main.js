const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database')
const app_routes = require('./routes/app_routes')
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use("/api/auth", app_routes);

app.get('/' , (req , res) => {
    res.send("<h1>DeepNauxs Authentication and Autherization</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB()