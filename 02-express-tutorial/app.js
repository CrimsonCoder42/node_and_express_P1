const express = require('express'); 
const app = express(); 
const { products } = require('./data');

const port = 8080;


app.get('/', (req, res) => {
    res.send("<h1> Home Page </h1> <a href='/api/products'>products</a>")
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    console.log(req.params)
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    console.log(req.params);
    res.send("hello world")
} )


app.listen(port, () => {
    console.log(`app running on localhost${port}`)
})

//5:32:34