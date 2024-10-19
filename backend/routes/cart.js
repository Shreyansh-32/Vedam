const {Router} = require('express');
const { userMiddleware } = require('../middlewares/user');

const cartRouter = Router();

cartRouter.get('/' , userMiddleware , async(req , res) => {
    const userId = req.body.userId;

    try{
        const cart = await cartModel.find({userId : new ObjectId(userId)});
        res.status(200).json({
            "message" : "Successfully fetched cart",
            "cart" : cart
        });
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

module.exports = {
    cartRouter : cartRouter
}