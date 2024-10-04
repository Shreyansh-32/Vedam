const { Router } = require("express");
const bcrypt = require("bcrypt");
const { userModel, cartModel, productModel , ordersModel } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const { userMiddleware } = require("../middlewares/user");

const userRouter = Router();

userRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userModel.findOne({ email });

    if (user) {
      const comparePassword = await bcrypt.compare(password, user.password);
      if (comparePassword) {
        const token = jwt.sign({id :user._id}, process.env.JWT_USER_PASSWORD);
        res.status(200).json({
          message: "Singed in successfully",
          token: token,
        });
      } else {
        res.status(403).json({
          message: "Incorrect Credentials",
        });
      }
    } else {
      res.status(403).json({
        message: "User with given email doesn't exist",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    });
    res.status(200).json({
      message: "Signed up successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.post("/addcart" , userMiddleware , async (req, res) => {
  const { productId, userId, quantity } = req.body;

  try {
    const prod = await cartModel.findOne({productId : new ObjectId(productId)})

    if(prod){
        await cartModel.updateOne({productId : new ObjectId(productId)} , {
            quantity : prod.quantity+quantity
        });

        res.status(200).json({
            "message" : "Updated cart successfully"
        });
    }
    else{
        await cartModel.create({
            productId: new ObjectId(productId),
            userId: new ObjectId(userId),
            quantity,
          });
      
          
          res.status(200).json({
              "message" : "Added to cart successfully"
          });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.post('/orders' , userMiddleware , async(req , res) => {
    const {productId , userId , quantity} = req.body;
    try{
        console.log(new Date().toLocaleTimeString());
        await ordersModel.create({
            productId : new ObjectId(productId),
            userId : new ObjectId(userId),
            quantity : quantity,
            time : new Date().toLocaleTimeString(),
            date:new Date().toLocaleDateString()
        });
        console.log("Order placed");

        const prod = await productModel.findOne({
            _id: new ObjectId(productId),
        });
        
            
        await productModel.updateOne(
          { _id: new ObjectId(productId) },
          { $set: { quantity: prod.quantity - quantity } } 
        );

        res.status(200).json({
            "message" : "Order placed successfully"
        });
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

module.exports = {
  userRouter: userRouter,
};
