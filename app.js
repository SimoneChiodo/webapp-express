// INIT EXPRESS
const express = require("express");
const app = express();

// INIT ENV
const { APP_HOST, APP_PORT } = process.env;

//REGISTERING ROUTES
const moviesRouter = require("./routers/moviesRouter");
app.use(moviesRouter);

// SERVER LISTENING
app.listen(APP_PORT, () => {
    console.log(`Server listening at http://${APP_HOST}:${APP_PORT}`);
});
