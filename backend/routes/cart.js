const {Router} = require('express');
const { userMiddleware, userIdMiddleware } = require('../middlewares/user');
const{cartModel} = require("../db")
const {ObjectId, Mongoose, default: mongoose} = require("mongoose");
const cartRouter = Router();

cartRouter.get('/', userIdMiddleware, userMiddleware, async (req, res) => {
    const userId = req.userId; // This should be a string from middleware
    console.log("UserId from middleware:", userId);
  
    try {
      // Convert userId to ObjectId for querying
      const cart = await cartModel.find({ userId: new mongoose.Types.ObjectId(userId) }).populate("productId" , "title description writer price imageUrl");
      console.log("Fetched cart data:", cart);
  
      // if (cart.length === 0) {
      //   return res.status(200).json({
      //     message: "No cart data found for this user",
      //   });
      // }
  
      res.status(200).json({
        message: "Successfully fetched cart",
        cart,
      });
    } catch (err) {
      console.error("Error fetching cart data:", err.stack || err);
      res.status(500).json({
        message: "Internal server error",
        error: err.message,
      });
    }
  });
  

module.exports = {
    cartRouter : cartRouter
}