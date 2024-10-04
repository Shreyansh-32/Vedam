const {Router} = require('express');
const bcrypt = require('bcrypt');
const { adminModel, productModel } = require('../db');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const { ObjectId } = require('mongodb');
const { adminMiddleware } = require('../middlewares/admin');

const adminRouter = Router();

adminRouter.post('/signup' , async(req , res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;

    try{
        const hashedPassword = await bcrypt.hash(password , 5);
        await adminModel.create({
            email : email,
            password : hashedPassword,
            firstName : firstName,
            lastName : lastName,
            phone : phone
        });
        res.status(200).json({
            "message" : "Signed up successfully"
        })
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
});

adminRouter.post("/signin", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    try{

        const admin = await adminModel.findOne({email});

        if(admin){

            const comparePassword = await bcrypt.compare(password , admin.password);

            if(comparePassword){
                const token = jwt.sign({id : admin._id} , process.env.JWT_ADMIN_PASSWORD);
                res.status(200).json({
                    "message" : "Signed in successfully",
                    token : token
                });
            }
            else{
                res.status(403).json({
                    "message" : "Incorrect password"
                });
            }
        }
        else{
            res.status(403).json({
                "message" : "Admin with given email doesn't exist"
            });
        }
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
  });

adminRouter.post('/addproduct' , adminMiddleware ,async(req , res) => {
    const {title , description , writer , page , price , seller , quantity , imageUrl} = req.body;

    try{
        const prod = await productModel.findOne({title , writer , seller : new ObjectId(seller)});
        console.log(prod);
        if(prod){
            await productModel.updateOne({title , writer , seller : new ObjectId(seller)} , {
                quantity : prod.quantity + quantity
            });
            res.status(200).json({
                "message" : "Product updated successfully"
            });
        }
        else{
            await productModel.create({
                title,
                description,
                writer,
                page,
                price,
                seller:new ObjectId(seller),
                quantity,
                imageUrl
            });
    
            res.status(200).json({
                "message" : "Product added successfully"
            });
        }
    }
    catch(err){
        res.status(500).json({
            "message" : "Internal server error"
        });
    }
})

module.exports = {
    adminRouter : adminRouter
}