// INIT CONNECTION
const connection = require("../db/conn");

// CRUD METHODS
function index(req, res) {
    const sql = "SELECT * FROM movies";

    connection.query(sql, (err, results) => {
        res.json(results);
    });
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const sql = "SELECT * FROM movies WHERE id = ?";

    connection.query(sql, [id], (err, results) => {
        res.json(results);
    });
}

// EXPORT
module.exports = { index, show };
