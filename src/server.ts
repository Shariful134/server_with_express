import express, { NextFunction, Request, Response } from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { config } from './config';
import initDB, { pool } from './config/db';
import logger from './config/middlware';
import { userRoutes } from './modules/user/user.route';
import { todosRoutes } from './modules/todo/todo.routes';

const app = express();
const port = config.port;

//parser
app.use(express.json());

// Initialized DB
initDB();
//all routes
app.use('/users', userRoutes);
app.use('/todos', todosRoutes);

app.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello Shariful islams!');
});

///CRUD
// app.post('/users', async (req: Request, res: Response) => {
//   const { name, email } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO users(name, email )VALUES($1,$2) RETURNING *`,
//       [name, email],
//     );
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Data Inserted Successfully',
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.get('/users', async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Users Retrieved Successfully',
//       data: result.rows,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.get('/users/:id', async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
//       req.params.id,
//     ]);

//     if (result.rows.length === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'user not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Users Retrieved Successfully',
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.delete('/users/:id', async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query(
//       `DELETE FROM users WHERE id = $1 RETURNING *`,
//       [req.params.id],
//     );
//     console.log(result.rowCount);
//     if (result.rowCount === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'user not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Users Deleted Successfully',
//       data: null,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.put('/users/:id', async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   try {
//     const result = await pool.query(
//       `UPDATE users SET name=$1, email=$2 WHERE id =$3 RETURNING *`,
//       [name, email, req.params.id],
//     );

//     if (result.rows.length === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'user not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Users Updated Successfully',
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

//TODOS
// app.post('/todos', async (req: Request, res: Response) => {
//   const { user_id, title } = req.body;
//   try {
//     const result = await pool.query(
//       `INSERT INTO todos(user_id, title) VALUES($1,$2) RETURNING *`,
//       [user_id, title],
//     );
//     res.status(201).json({
//       success: true,
//       message: 'Todos Created Successfully',
//       data: result.rows[0],
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

// app.get('/todos', async (req: Request, res: Response) => {
//   try {
//     // const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
//     //   req.params.id,
//     // ]);
//     //  const result = await pool.query('SELECT * FROM users');
//     const result = await pool.query(`SELECT * FROM todos`);

//     if (result.rows.length === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'Todos not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Todos Retrieved Successfully',
//       data: result.rows,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.get('/todos/:id', async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [
//       req.params.id,
//     ]);

//     if (result.rows.length === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'Todos not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Todos Retrieved Successfully',
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.put('/todos/:id', async (req: Request, res: Response) => {
//   const { title, completed } = req.body;
//   try {
//     const result = await pool.query(
//       `UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *`,
//       [title, completed, req.params.id],
//     );
//     if (result.rows.length === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'Todos not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Todos Updated Successfully',
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });
// app.delete('/todos/:id', async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query(
//       `DELETE FROM todos WHERE id=$1 RETURNING *`,
//       [req.params.id],
//     );
//     if (result.rows.length === 0) {
//       res.status(404).json({
//         success: 'false',
//         message: 'Todos not found!',
//       });
//     }
//     // console.log(result.rows[0]);
//     res.status(201).json({
//       success: true,
//       message: 'Todos Deleted Successfully',
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found!',
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
