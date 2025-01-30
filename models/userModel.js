const pool = require("../services/db");

const createUser = async (name, email) => {
    const result = await pool.query(
        'INSERT INTO "users" (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
    );
    return result.rows[0];
};

const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

const updateUser = async (id, name, email) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
};

module.exports = { createUser, getUserById, updateUser, deleteUser };
