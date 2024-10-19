const {Router} = require('express');
const { productModel, ordersModel } = require('../db');
const { ObjectId } = require("mongodb");
const { userMiddleware } = require('../middlewares/user');

const ordersRouter = Router();

ordersRouter.get('/' , userMiddleware , async(req , res) => {
    const userId = req.body.userId;

    try{
        const orders = await ordersModel.find({userId : new ObjectId(userId)});
        res.status(200).json({
            "message" : "Successfully fetched orders",
            "orders" : orders
        });
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

module.exports = {
    ordersRouter : ordersRouter
}