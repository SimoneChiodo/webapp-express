// INIT ROUTER
const express = require("express");
const router = express.Router();

// IMPORT CONTROLLER
const { index, show, storeReview } = require("../controllers/moviesController");

// REGISTERING ROUTES
router.get("/", index);
router.get("/:id", show);
router.post("/reviews/:id", storeReview);

// EXPORT
module.exports = router;
