// configuration of server and the database
const key = require('dotenv').config();
const serverConfig = {
    port: 5000,
    hostname: "127.0.0.1"
}

const dbConfig = {
    mongoUrl: `mongodb+srv://ShubhamShaw:${process.env.mongoDB_password}@crunchbinge.gndxklp.mongodb.net/?retryWrites=true&w=majority`
}


module.exports = {
    serverConfig,
    dbConfig,
    key
}