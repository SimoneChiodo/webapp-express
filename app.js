// INIT EXPRESS
const express = require("express");
const app = express();

// INIT ENV
const { APP_HOST, APP_PORT, APP_FRONTEND_URL } = process.env;

// CORS CONFIG
const cors = require("cors");
let corsOptions = {
    origin: APP_FRONTEND_URL,
    optionsSuccessStatus: 200,
};

// REGISTERING MIDDLEWARES
app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));

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
