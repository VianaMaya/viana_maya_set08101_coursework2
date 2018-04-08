const express = require('express');
const router = express.Router();

module.exports = router;

app.get('/', (req, res) =>{
    res.send('It works');
});