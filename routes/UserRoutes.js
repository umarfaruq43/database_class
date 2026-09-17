const express = require("express");
const {
    CreateUser,
    getSingleUser,
    updateUser,
    deleteUser,
    getAllUser,
} = require("../controller/userController");

const userRoute = express.Router();
userRoute.post("/user", CreateUser);
userRoute.get("/user", getAllUser);
userRoute.get("/user/:id", getSingleUser);
userRoute.patch("/user/:userId", updateUser);
userRoute.delete("/user/:userId", deleteUser);

module.exports = userRoute;
