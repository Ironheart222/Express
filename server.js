const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/index');
const productRouter = require('./routes/products');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(productRouter);

app.use(mainRouter);

app.use((req, res, next) => {

    return res.json({ message: 'page not found'})
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});