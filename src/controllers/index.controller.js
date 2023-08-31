const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "nintendo2020",
  database: "firstapi",
  port: "5432",
});

const getHome = (req, res) => {
  res.send("Hello World!");
};

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  res.json(response.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  res.json({
    message: "User Added successfully",
    body: {
      user: { name, email },
    },
  });
};

const getUserByid = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(response.rows);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.json(`User ${id} deleted Successfully`);
};

module.exports = {
  getUsers,
  getHome,
  createUser,
  getUserByid,
  deleteUser,
};
