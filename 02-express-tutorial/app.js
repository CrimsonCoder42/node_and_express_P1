// 5:15:51

const express = require('express');
const path = require('path');


const app = express();
const port = 8080;

app.use(express.static('./public'))


// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})


app.listen(port, () => {
console.log(`listening on localhost:${port}`)
})