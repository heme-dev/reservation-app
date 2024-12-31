const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async function(req, res) {
    const foundProducts = await Product.find({})
    return res.json(foundProducts)
})

router.get('/:productId', async function(req, res) {
    try {
        const productId = req.params.productId
        const foundProduct = await Product.findById(productId)
        
        if (!foundProduct) {
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
        }

        return res.json(foundProduct)
    } catch(err) {
        return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }
})

module.exports = router