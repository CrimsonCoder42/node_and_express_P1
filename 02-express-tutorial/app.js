const express = require('express');
const app = express(); 
const logger = require('./logger');

const port = 8080;

// req => middleware res


app.get("/", logger ,(req, res) => {
    res.send("Home");
})

app.get("/about", logger , (req, res) => {
    res.send("About"); 
})



app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}.`);
})