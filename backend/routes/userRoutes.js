const express = require("express");

const auth = require("../middleware/authMiddleware");

const {
  getProfile,
  followUser,
  unfollowUser
} = require("../controllers/userController");

const router = express.Router();

router.get("/profile/:id", auth, getProfile);

router.post("/follow/:id", auth, followUser);

router.post("/unfollow/:id", auth, unfollowUser);

module.exports = router;