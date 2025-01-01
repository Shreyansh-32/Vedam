const {Router} = require('express');
const { productModel, ordersModel } = require('../db');
const { ObjectId } = require("mongodb");
const { userMiddleware, userIdMiddleware } = require('../middlewares/user');

const ordersRouter = Router();

ordersRouter.get('/' , userIdMiddleware , userMiddleware , async(req , res) => {
    const userId = req.userId;

    try{
        const orders = await ordersModel.find({userId : new ObjectId(userId)}).populate("productId" , "title description price writer imageUrl");
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

ordersRouter.delete("/" , userMiddleware , userIdMiddleware  , async(req , res) => {
    const orderId = req.body.orderId;
    const userId = req.userId;
    try{
        await ordersModel.deleteOneById({orderId});
        const orders = await ordersModel.find({userId : userId});
        res.status(200).json({"message" : "Order cancelled successfully" , orders});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message" : "Internal server error"});
    }
})

module.exports = {
    ordersRouter : ordersRouter
}