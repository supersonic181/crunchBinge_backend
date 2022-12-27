const cors = require("cors");
const express = require("express");
const app = express();
const appService = require("./appService");
const cookieParser = require("cookie-parser");

app.use(cors({
    credentials: true
}));
app.use(cookieParser());
appService.connectToDB();
appService.setAPIMiddleware(app);
appService.apiSetUp(app);

module.exports = app;
