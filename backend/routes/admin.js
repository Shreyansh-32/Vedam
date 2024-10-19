const { Router } = require("express");
const bcrypt = require("bcrypt");
const { adminModel, productModel } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const { adminMiddleware } = require("../middlewares/admin");
const zod = require("zod");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;

  const Schema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    firstName: zod.string().min(2).max(30),
    lastName: zod.string(),
    phone: zod.number(),
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
      const admin = adminModel.findOne({ email });
      if (!admin) {
        const hashedPassword = await bcrypt.hash(password, 5);
        await adminModel.create({
          email: email,
          password: hashedPassword,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        });
        res.status(200).json({
          message: "Signed up successfully",
        });
      } else {
        res.status(403).json({
          message: "Admin with given email exist",
        });
      }
    } else {
      res.status(403).json({
        message: "Invalid input details",
        error: response.error.issues,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const Shema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  });

  try {
    const response = Shema.safeParse({ email, password });
    if (response.success) {
      const admin = await adminModel.findOne({ email });

      if (admin) {
        const comparePassword = await bcrypt.compare(password, admin.password);

        if (comparePassword) {
          const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_ADMIN_PASSWORD
          );
          res.status(200).json({
            message: "Signed in successfully",
            token: token,
          });
        } else {
          res.status(403).json({
            message: "Incorrect password",
          });
        }
      } else {
        res.status(403).json({
          message: "Admin with given email doesn't exist",
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

adminRouter.post("/addproduct", adminMiddleware, async (req, res) => {
  const {
    title,
    description,
    writer,
    page,
    price,
    seller,
    quantity,
    imageUrl,
  } = req.body;

  try {
    const prod = await productModel.findOne({
      title,
      writer,
      seller: new ObjectId(seller),
    });
    // console.log(prod);
    if (prod) {
      if (prod.quantity + quantity < 0) {
        await productModel.deleteOne({
          title,
          writer,
          seller: new ObjectId(seller),
        });
      } else {
        await productModel.updateOne(
          { title, writer, seller: new ObjectId(seller) },
          {
            quantity: prod.quantity + quantity,
          }
        );
      }
      res.status(200).json({
        message: "Product updated successfully",
      });
    } else {
      await productModel.create({
        title,
        description,
        writer,
        page,
        price,
        seller: new ObjectId(seller),
        quantity,
        imageUrl,
      });

      res.status(200).json({
        message: "Product added successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

adminRouter.delete("/deleteproduct", adminMiddleware, async (req, res) => {
  const { title, writer, seller } = req.body;

  try {
    const prod = await productModel.findOne({
      title,
      writer,
      seller: new ObjectId(seller),
    });

    // console.log(prod);

    if (prod) {
      await productModel.deleteOne({
        title,
        writer,
        seller: new ObjectId(seller),
      });
      res.status(200).json({
        message: "Product deleted successfully",
      });
    } else {
      res.status(403).json({
        message: "Product not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = {
  adminRouter: adminRouter,
};

//[{title , description , seller , writer , page , price , quantity , imageUrl}]
//header , body , query , cookie
