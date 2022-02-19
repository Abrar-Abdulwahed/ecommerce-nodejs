
const express = require("express");
const fetch =  require("node-fetch");
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', 'views');

app.listen(port, console.log(`Listening on ${port}`));


app.get(["/", "home"], (req, res) => {
    fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(res.render('index'), {products: res.json()});
})



app.get("/favorite", (req, res) => {
    res.render('favorite');
})

app.get("/cart", (req, res) => {
    res.render('cart');
})

app.get("/contact", (req, res) => {
    res.render('contact');
})
