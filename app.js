// INIT EXPRESS
const express = require("express");
const app = express();

// INIT ENV
const { APP_HOST, APP_PORT } = process.env;

// REGISTERING MIDDLEWARES
app.use(express.json());
app.use(express.static("public"));

// REGISTERING ROUTES
const moviesRouter = require("./routers/moviesRouter");
app.use(moviesRouter);

// ERRORS HANDLERS
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
app.use(errorsHandler);
app.use(notFound);

// SERVER LISTENING
app.listen(APP_PORT, () => {
    console.log(`Server listening at http://${APP_HOST}:${APP_PORT}`);
});
