const express = require("express");
const {
    uploadProduct,
    getAllProduct,
} = require("../controller/productController");
const productRoute = express.Router();

productRoute.post("/upload/:userId", uploadProduct);
productRoute.get("/product", getAllProduct);

module.exports = productRoute;
