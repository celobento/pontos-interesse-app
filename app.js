const express = require('express')
const app = express();

app.get('/', function(req, res) {
    res.send('invalid path')
})

const api = require('./routes/api')
app.use('/api', api)

let port = 5000;

app.listen(process.env.port || port, () => {
    console.log('Server listening on port: ' + port)
})