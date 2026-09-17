const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true },
        price: { type: String, require: true },
        category: { type: String, require: true },
        ava: { type: String, require: true },
        quantity: { type: String, require: true },
        image: { type: String, require: true },
    },
    { timestamp: true },
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
