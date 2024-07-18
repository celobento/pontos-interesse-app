const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const connectDB = require('./database/connection');

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// conectar ao banco
connectDB();

app.get('/', function(req, res) {
    res.send('invalid path')
})

app.use(bodyParser.json())

const api = require('./routes/api')
app.use('/api', api)

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
   // 'res.status(422)'->muda o status
   res.status(422).send({error: err.message});
 });

let port = 5000;

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});