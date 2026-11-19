"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoControllers = void 0;
const todo_service_1 = require("./todo.service");
const createTodo = async (req, res) => {
    const { user_id, title } = req.body;
    try {
        const result = await todo_service_1.todoServices.creteTodo(user_id, title);
        res.status(201).json({
            success: true,
            message: 'Todos Created Successfully',
            data: result.rows[0],
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const getTodo = async (req, res) => {
    try {
        const result = await todo_service_1.todoServices.getTodo();
        if (result.rows.length === 0) {
            res.status(404).json({
                success: 'false',
                message: 'Todos not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Todos Retrieved Successfully',
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
const getSingleTodo = async (req, res) => {
    try {
        const result = await todo_service_1.todoServices.getSingleTodo(req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: 'false',
                message: 'Todos not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Todos Retrieved Successfully',
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
const updateTodo = async (req, res) => {
    const { title, completed } = req.body;
    try {
        const result = await todo_service_1.todoServices.updateTodo(title, completed, req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: 'false',
                message: 'Todos not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Todos Updated Successfully',
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
const deleteTodo = async (req, res) => {
    try {
        const result = await todo_service_1.todoServices.deleteTodo(req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: 'false',
                message: 'Todos not found!',
            });
        }
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: 'Todos Deleted Successfully',
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
exports.todoControllers = {
    createTodo,
    getTodo,
    getSingleTodo,
    updateTodo,
    deleteTodo,
};
//# sourceMappingURL=todo.controller.js.map