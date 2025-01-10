// INIT ROUTER
const express = require("express");
const router = express.Router();

// IMPORT CONTROLLER
const { index } = require("../controllers/moviesController");

// REGISTERING ROUTES
router.get("/", (req, res) => {
    res.json({
        message: "ok",
    });
});

// EXPORT
module.exports = router;
