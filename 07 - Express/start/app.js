const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./routes/product');

const app = express();

// Setting up middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up routes
app.use('/product', productRoutes)

// Creating a server
app.listen(3000, () => {
    console.log('listening on port 3000');
});