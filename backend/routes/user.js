const { Router } = require("express");
const bcrypt = require("bcrypt");
const { userModel, cartModel, productModel, ordersModel } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const { userMiddleware, userIdMiddleware } = require("../middlewares/user");
const zod = require("zod");

const userRouter = Router();

userRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const Shema = zod.object({
    email: zod.string().email(),
    password: zod.string()
    .min(8, { message: 'minLengthErrorMessage' })
    .max(20, { message: 'maxLengthErrorMessage' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'uppercaseErrorMessage',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'lowercaseErrorMessage',
    })
    .refine((password) => /[0-9]/.test(password), { message: 'numberErrorMessage'})
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: 'specialCharacterErrorMessage',
    }),
  });

  try {
    const response = Shema.safeParse({ email, password });

    if (response.success) {
      const user = await userModel.findOne({ email });

      if (user) {
        const comparePassword = await bcrypt.compare(password, user.password);
        if (comparePassword) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_USER_PASSWORD
          );
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
    } else {
      res.status(403).json({
        message: "Incorrect input format",
        error: response.error.issues,
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
  const Schema = zod.object({
    email: zod.string().email(),
    password: zod.string()
    .min(8, { message: 'minLengthErrorMessage' })
    .max(20, { message: 'maxLengthErrorMessage' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'uppercaseErrorMessage',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'lowercaseErrorMessage',
    })
    .refine((password) => /[0-9]/.test(password), { message: 'numberErrorMessage' })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: 'specialCharacterErrorMessage',
    }),
    firstName: zod.string(),
    lastName: zod.string(),
    phone: zod.number().gte(1000000000).lte(9999999999),
  });

  try {
    const response = Schema.safeParse({
      email,
      password,
      firstName,
      lastName,
      phone,
    });

    if (response.success) {
      const user = await userModel.findOne({ email });
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 5);
        await userModel.create({
          email: email,
          password: hashedPassword,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        });
        const userA = await userModel.findOne({ email });
        const token = jwt.sign(
          { id: userA._id, email: userA.email },
          process.env.JWT_USER_PASSWORD
        );
        res.status(200).json({
          message: "Signed up successfully",
          token: token,
        });
      } else {
        res.status(403).json({
          message: "User with given email exist",
        });
      }
    } else {
      res.status(403).json({
        message: "Invalid input type",
        error: response.error.issues,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.post("/addcart", userIdMiddleware, userMiddleware, async (req, res) => {
  const { productId , quantity } = req.body;
  const userId = req.userId;

  try {
    const prod = await cartModel.findOne({
      productId: new ObjectId(productId),
    });

    if (prod) {
      if (prod.quantity + quantity <= 0) {
        await cartModel.deleteOne({
          productId: new ObjectId(productId),
        });
      } else {
        await cartModel.updateOne(
          { productId: new ObjectId(productId) },
          {
            quantity: prod.quantity + quantity,
          }
        );
      }
      res.status(200).json({
        message: "Updated cart successfully",
      });
    } else {
      await cartModel.create({
        productId: new ObjectId(productId),
        userId: new ObjectId(userId),
        quantity,
      });

      res.status(200).json({
        message: "Added to cart successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

userRouter.post("/orders" , userIdMiddleware , userMiddleware, async (req, res) => {
  const { productId , quantity } = req.body;
  const userId = req.userId;
  try {
    console.log(new Date().toLocaleTimeString());
    await ordersModel.create({
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
      quantity: quantity,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
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
      message: "Order placed successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = {
  userRouter: userRouter,
};
