// INIT ROUTER
const express = require("express");
const router = express.Router();

// IMPORT CONTROLLER
const { index, show } = require("../controllers/moviesController");

// REGISTERING ROUTES
router.get("/", index);
router.get("/:id", show);

// EXPORT
module.exports = router;
