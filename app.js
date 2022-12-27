const express = require("express");
const app = express();
const appService = require("./appService");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors());
appService.connectToDB();
appService.setAPIMiddleware(app);
appService.apiSetUp(app);

module.exports = app;
