const cors = require("cors");
const express = require("express");
const app = express();
const appService = require("./appService");
const cookieParser = require("cookie-parser");


const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
    exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));

appService.connectToDB();

app.use(cookieParser());
appService.setAPIMiddleware(app);
appService.apiSetUp(app);

module.exports = app;
