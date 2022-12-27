// Entry point of the application
const app = require("../app");
const { serverConfig } = require("../config/appConfig");

const PORT = process.env.PORT || serverConfig.port;

module.exports = app.listen(PORT, () => {
    console.log("Server running at port " + PORT);
});