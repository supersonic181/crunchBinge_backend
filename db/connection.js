const mongoose = require("mongoose");
const { dbConfig } = require("../config/appConfig");

const createMongoConnection = async () => {
    try {
      const conn = await mongoose.connect(dbConfig.mongoUrl);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

// const createMongoConnection = () => {
//     mongoose.connect(dbConfig.mongoUrl)
// }

const getMongoConnection = () => {
    return mongoose.connection;
}

module.exports = {
    getMongoConnection,
    createMongoConnection
}
