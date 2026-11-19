"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const db_1 = require("../../config/db");
const createUser = async (name, email) => {
    const result = await db_1.pool.query(`INSERT INTO users(name, email )VALUES($1,$2) RETURNING *`, [name, email]);
    return result;
};
const getUser = async () => {
    const result = await db_1.pool.query('SELECT * FROM users');
    return result;
};
const getSingleUser = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return result;
};
const userUpdate = async (name, email, id) => {
    const result = await db_1.pool.query(`UPDATE users SET name=$1, email=$2 WHERE id =$3 RETURNING *`, [name, email, id]);
    return result;
};
const userDelete = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);
    return result;
};
exports.userService = {
    createUser,
    getUser,
    getSingleUser,
    userUpdate,
    userDelete,
};
//# sourceMappingURL=user.service.js.map