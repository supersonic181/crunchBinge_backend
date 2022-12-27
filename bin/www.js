// Entry point of the application
const app = require("../app");
const db = require("../db/connection");
const { serverConfig } = require("../config/appConfig");

const PORT = process.env.PORT || serverConfig.port;

module.exports = db.createMongoConnection().then(() => {
    app.listen(PORT, () => {
        console.log("Server running at port " + PORT);
    });
}) 