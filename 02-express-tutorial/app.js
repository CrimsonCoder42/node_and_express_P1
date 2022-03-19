const express = require('express');
const app = express(); 
let { people } = require('./data');
const port = 8080


// static assets 

app.use(express.static('./methods-public'))


app.use(express.url)


app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
} )

app.post('/login', (req, res) => {
    res.send('POST')
})

app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}.`);
})

