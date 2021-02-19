require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {
    shuttles
} = require('./shuttles.js');

app.use(cors());

app.get('/shuttles', (req, res) => {
    res.json({
        results: shuttles
    })
})

app.get('/shuttles/:crew', (req, res) => {
    const crew = req.params.crew

    const shuttlesObj = shuttles.find((obj) => obj.crew === crew)

    res.json({
        results: shuttlesObj
    })
})

module.exports = {
    app
}