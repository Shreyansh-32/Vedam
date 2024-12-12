const {Router} = require('express');
const mongoose = require('mongoose');
const { productModel } = require('../db');

const productRouter = Router();

productRouter.get('/', async (req , res) => {
    try{
        const products = await productModel.find({});
        res.status(200).json({
            products
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
            product
        });
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

productRouter.get("/search/:book" , async(req , res) => {
    const {book} = req.params;

    try{
        const books = await productModel.find({
            $or : [{title : book} , {writer : book}]
        });
        res.status(200).json({books});
    }
    catch(err){
        res.status(500).json({"message" : "Internal server error"});
    }
});

productRouter.get("/search/category/:book" , async(req , res) => {
    const {book} = req.params;

    try{
        const books = await productModel.find({
            category : book
        });
        res.status(200).json({books});
    }
    catch(err){
        res.status(500).json({"message" : "Internal server error"});
    }
});

module.exports = {
    productRouter : productRouter
}