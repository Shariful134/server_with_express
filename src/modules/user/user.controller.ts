import { Request, Response } from 'express';
import { pool } from '../../config/db';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await userService.createUser(name, email);
    // console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: 'Data Inserted Successfully',
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser();
    // console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: 'Users Retrieved Successfully',
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(req.params.id as string);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const userUpdate = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await userService.userUpdate(
      name,
      email,
      req.params.id as string,
    );

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const userDelete = async (req: Request, res: Response) => {
  try {
    const result = await userService.userDelete(req.params.id as string);
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const userController = {
  createUser,
  getUser,
  getSingleUser,
  userUpdate,
  userDelete,
};
