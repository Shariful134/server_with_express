import { pool } from '../../config/db';
import bcrypt from "bcryptjs";

const createUser = async (paylod: Record<string, unknown>) => {
  const { name, email, role, password } = paylod;
  const hashedpassword = await bcrypt.hash(password as string, 10);
  const result = await pool.query(
    `INSERT INTO users(name, email,role, password )VALUES($1,$2,$3, $4) RETURNING *`,
    [name, email, role, hashedpassword],
  );
  return result;
};

const getUser = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result;
};
const getSingleUser = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result;
};
const userUpdate = async (name: string, email: string, id: string) => {
  const result = await pool.query(
    `UPDATE users SET name=$1, email=$2 WHERE id =$3 RETURNING *`,
    [name, email, id],
  );
  return result;
};
const userDelete = async (id: string) => {
  const result = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING *`,
    [id],
  );
  return result;
};

export const userService = {
  createUser,
  getUser,
  getSingleUser,
  userUpdate,
  userDelete,
};
