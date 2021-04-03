const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const uri = 'mongodb://localhost:27017/effect24?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
mongoose.connect(uri);
  
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('', require('./routes/api'))

app.get('/', function(_, res){
    res.send('working');
});

app.listen(80);

console.log('API is running on port 3000');