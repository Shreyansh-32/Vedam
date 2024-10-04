const {Router} = require('express');
const { productModel, ordersModel } = require('../db');
const { ObjectId } = require("mongodb");

const ordersRouter = Router();



module.exports = {
    ordersRouter : ordersRouter
}