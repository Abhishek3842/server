const express = require("express");
const { createUser, getUser, updateUser, deleteUser } = require("../controller/user");
const verifyFirebaseToken = require("../middleware/auth");

const router = express.Router();

router.post("/users", verifyFirebaseToken, createUser);
router.get("/users/:id", verifyFirebaseToken, getUser);
router.put("/users/:id", verifyFirebaseToken, updateUser);
router.delete("/users/:id", verifyFirebaseToken, deleteUser);

module.exports = router;
