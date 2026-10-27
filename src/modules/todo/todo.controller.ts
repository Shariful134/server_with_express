import { Request, Response } from 'express';
import { pool } from '../../config/db';
import { todoServices } from './todo.service';

const createTodo = async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await todoServices.creteTodo(user_id, title);
    res.status(201).json({
      success: true,
      message: 'Todos Created Successfully',
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getTodo();
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getSingleTodo(req.params.id as string);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  const { title, completed } = req.body;
  try {
    const result = await todoServices.updateTodo(
      title,
      completed,
      req.params.id as string,
    );
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.deleteTodo(req.params.id as string);
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const todoControllers = {
  createTodo,
  getTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
