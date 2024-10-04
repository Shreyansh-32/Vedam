const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;


const userSchema = mongoose.Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String,
    phone : Number
});

const productSchema = mongoose.Schema({
    title : String,
    description : String,
    writer : String,
    page : Number,
    price : Number,
    seller : {type : ObjectId , ref : 'admin'},
    quantity : Number,
    imageUrl : String
});

const adminSchema = mongoose.Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String,
    phone : Number
});

const cartSchema = mongoose.Schema({
    productId : {type : ObjectId , ref : 'product'},
    userId : {type : ObjectId , ref : 'user'},
    quantity : Number
});

const ordersSchema = mongoose.Schema({
    productId : {type : ObjectId , ref : 'product'},
    userId : {type : ObjectId , ref : 'user'},
    quantity : Number,
    time : String,
    date : String
});

const userModel = mongoose.model('user' , userSchema);
const productModel = mongoose.model('product' , productSchema);
const adminModel = mongoose.model('admin' , adminSchema);
const cartModel = mongoose.model('cart' , cartSchema);
const ordersModel = mongoose.model('orders' , ordersSchema);

module.exports = {
    userModel,
    productModel,
    adminModel,
    cartModel,
    ordersModel
}