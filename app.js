const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//Passport config
require('./config/passport')(passport);

//load Routes
const auth = require('./routes/auth');
//load keys
const keys = require('./config/keys');

//map global promises
mongoose.Promise = global.Promise;

// mongoose connect
mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const app = express();

//Use Routes
app.use('/auth', auth);


const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
});