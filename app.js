// INIT EXPRESS
const express = require("express");
const app = express();

// SERVER LISTENING
app.listen(DB_PORT, () => {
    console.log("Server listening at http://localhost:3000");
});
