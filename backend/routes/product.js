const {Router} = require('express');
const mongoose = require('mongoose');

const productRouter = Router();

productRouter.get('/' , (req , res) => {

})

module.exports = {
    productRouter : productRouter
}