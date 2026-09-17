/***
 * CRUD operation for product
 * C -create Post
 */

const productModel = require("../model/productModel");
const userModel = require("../model/userModel");
const { updateUser } = require("./userController");

const uploadProduct = async (req, res) => {
    try {
        const getUserId = await userModel.findById(req.params.userId);
        const { name, description, price, stock, category, quantity, image } =
            req.body;

        const product = await productModel.create({
            name,
            description,
            price,
            stock,
            category,
            quantity,
            image,
        });

        if (!getUserId) {
            return res.status(404).json({
                message: "User not found.",
            });
        }
        await getUserId.products.push(product?._id);
        await getUserId.save();

        return res.status(201).json({
            message: "Success",
            data: product,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllProduct = async (req, res) => {
    try {
        // const getUserId = await userModel.findById(req.params.userId);

        const product = await productModel.find();

        // if (!getUserId) {
        //     return res.status(404).json({
        //         message: "User not found.",
        //     });
        // }
        // await getUserId.products.push(product._id);
        // await getUserId.save();

        return res.status(200).json({
            message: "Success",
            data: product,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const updateProduct = async (req, res) => {
//     try {
//         const { productId } = req.params;
//         const { name, description, price, stock, category, quantity, image } =
//             req.body;

//         const product = await productModel.findByIdAndUpdate(
//             productId,
//             {
//                 name,
//                 description,
//                 price,
//                 stock,
//                 category,
//                 quantity,
//                 image,
//             },
//             {
//                 new: true,
//             },
//         );

//         return res.status(201).json({
//             message: "Success",
//             data: product,
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

module.exports = { uploadProduct, getAllProduct };

// const product = {
//     "name": "Laptop",
//     "description": "A lightweight laptop with 16GB RAM and 512GB SSD.",
//     "price": 1200,
//     "stock": 25,
//     "category": "Electronics",
//     "quantity": 1,
//     "image": "https://example.com/images/laptop.jpg"
// };
