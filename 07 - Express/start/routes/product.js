const express = require('express');

const { data } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
    try{
        res.status(200).json(data);
        // same as above but longer response
        // res.status(200).send(JSON.stringify(data));
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const product = data.find((product) => product.id === productId)
    res.status(200).json(product);
})      

let currentProductId = 9;
router. post('/', (req, res) => {
    // When creating the product, make sure to increase the currentProductId by 1
    const { name, imgURL, type } = req.body
    const product = {
        id: ++currentProductId,
        name: name,
        imgURL: imgURL,
        type: type
    }
    data.push(product);
    res.status(200).json(product);
});

router.put('/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const { name, imgURL, type } = req.body
    const product = data.find((product) => product.id === productId)
    product.name = name;
    product.imgURL = imgURL;
    product.type = type;

    res.status(200).json(product);
});

router.delete('/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const product = data.find((product) => product.id === productId)
    data.delete(product);
    res.status(204);
});

module.exports = router;