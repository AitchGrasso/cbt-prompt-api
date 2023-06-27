const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const postsController = require("../controllers/prompt");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", promptController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
