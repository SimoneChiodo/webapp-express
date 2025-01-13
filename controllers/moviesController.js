// INIT CONNECTION
const connection = require("../db/conn");

// INIT ENV
const { APP_HOST, APP_PORT } = process.env;

// CRUD METHODS
function index(req, res) {
    const sql = "SELECT * FROM movies";
    const reviewsSql = `SELECT r.name as review_name, 
    r.vote as review_vote, 
    r.text as review_text, 
    r.created_at as review_created_at, 
    r.updated_at as review_updated_at
    FROM movies AS m
    JOIN reviews AS r
    ON m.id = r.movie_id`;

    connection.query(sql, (err, results) => {
        // Check Errors
        checkQueryErrors(err, results);

        // Adding Correct Image Path
        results = results.map((movie) => ({
            ...movie,
            image: completeImagePath(movie.image),
        }));

        // Return
        res.json(results);
    });
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const sql = "SELECT * FROM movies WHERE id = ?";
    const reviewsSql = `SELECT r.name as review_name, 
    r.vote as review_vote, 
    r.text as review_text, 
    r.created_at as review_created_at, 
    r.updated_at as review_updated_at
    FROM movies AS m
    JOIN reviews AS r
    ON m.id = r.movie_id
    WHERE r.movie_id = ?`;

    connection.query(sql, [id], (err, results) => {
        // Check Errors
        checkQueryErrors(err, results);

        // Check if ID is correct
        if (!results || results.length === 0)
            return res.status(404).json({ error: "Movie not found" });

        // Adding Correct Image Path
        results = { ...results[0], image: completeImagePath(results[0].image) };

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            // Check Errors
            checkQueryErrors(err, reviewsResults);

            // Adding Reviews
            results.reviews = reviewsResults;

            // Return
            res.json(results);
        });
    });
}

// FZ COMPLETE IMAGE PATH
function completeImagePath(imageName) {
    return `${APP_HOST}:${APP_PORT}/img/movies_cover/${imageName}`;
}

// FZ CHECK QUERY ERROR
function checkQueryErrors(err, res) {
    if (err) {
        console.log(err);

        return res.status(500).json({ error: "Error during the SQL-query" });
    }
}

// EXPORT
module.exports = { index, show };
