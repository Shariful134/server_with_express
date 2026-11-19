"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res) => {
    try {
        const result = await user_service_1.userService.createUser(req.body);
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Data Inserted Successfully',
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getUser = async (req, res) => {
    try {
        const result = await user_service_1.userService.getUser();
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Users Retrieved Successfully',
            data: result.rows,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getSingleUser = async (req, res) => {
    try {
        const result = await user_service_1.userService.getSingleUser(req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: 'false',
                message: 'user not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Users Retrieved Successfully',
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const userUpdate = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await user_service_1.userService.userUpdate(name, email, req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: 'false',
                message: 'user not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Users Updated Successfully',
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const userDelete = async (req, res) => {
    try {
        const result = await user_service_1.userService.userDelete(req.params.id);
        // console.log(result.rowCount);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: 'false',
                message: 'user not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Users Deleted Successfully',
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.userController = {
    createUser,
    getUser,
    getSingleUser,
    userUpdate,
    userDelete,
};
//# sourceMappingURL=user.controller.js.map