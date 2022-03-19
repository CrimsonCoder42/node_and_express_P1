const express = require('express');
const app = express(); 
const logger = require('./logger');
const authorize = require('./authorize');

const port = 8080;

// req => middleware res

app.use(express.static('./public'));


app.get("/", (req, res) => {
    res.send("Home");
})

app.get("/about", (req, res) => {
    res.send("About"); 
})

app.get("/api/products", (req, res) => {
    res.send("Home");
})

app.get("/api/items", (req, res) => {
    console.log(req.user);
    res.send("About"); 
})

app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}.`);
})

