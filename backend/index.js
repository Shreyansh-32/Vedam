const express = require('express');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { productRouter } = require('./routes/product');
const { ordersRouter } = require('./routes/orders');
const { cartRouter } = require('./routes/cart');
const { default: mongoose } = require('mongoose');
require('dotenv').config()


app = express();
app.use(express.json());

app.use('/' , userRouter);
app.use('/admin' , adminRouter);
app.use('/products' , productRouter);
app.use('/orders' , ordersRouter);
app.use('/cart' , cartRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
    app.listen(3000);
}

main();