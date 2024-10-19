const {Router} = require('express');
const mongoose = require('mongoose');
const { productModel } = require('../db');

const productRouter = Router();

productRouter.get('/', async (req , res) => {
    try{
        const products = await productModel.find({});
        res.status(200).json({
            "message" : "Product retrieved successfully",
            products : products
        });
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

productRouter.get('/book' , async (req , res) => {
    const productId = req.body.productId;
    try{
        const product = await productModel.findOne({_id : productId});
        res.status(200).json({
            "message" : "Product retrieved successfully",
            product : product
        });
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

module.exports = {
    productRouter : productRouter
}