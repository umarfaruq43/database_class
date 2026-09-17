const userModel = require("../model/userModel");

/**
 * Crud
 * Create (post)
 * Read (Get)
 * Update (Put)
 * Delete (delete)
 */

const CreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await userModel.create({
            name,
            email,
            password,
        });
        res.status(201).json({
            message: "User created succesfully",
            data: user,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// find
const getAllUser = async (req, res) => {
    try {
        const getSingle = await userModel.find();
        return res.status(200).json({
            message: "All User fetched successfully",
            data: getSingle,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const getSingle = await userModel.findById(id);
        if (!getSingle) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        return res.status(200).json({
            message: "User fetched successfully",
            data: getSingle,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, password } = req.body;

        const update = await userModel.findByIdAndUpdate(
            userId,
            {
                name,
                password,
            },
            { new: true },
        );
        return res.status(200).json({
            message: "User updated successfully",
            data: update,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deleteUser = await userModel.findByIdAndDelete(userId);
        return res.status(200).json({
            message: "User deleted Successfully",
            data: deleteUser,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    CreateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
};
