const { Router } = require("express");
const {
  getUsers,
  getHome,
  createUser,
  getUserByid,
  deleteUser,
  updateUser,
} = require("../controllers/index.controller");
const router = Router();

router.get("/", getHome);

router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserByid);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

module.exports = router;
