const api = require("./api");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");

// To connect to the database
const connectToDB = () => {
    db.createMongoConnection();
    // console.log(db.getMongoConnection());
    console.log("Connection Established");
}

// Setting up a middleware for app
const setAPIMiddleware = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
}

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE',
      'PUT',
      'PATCH'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],

    credentials: true
  };

app.use(cors(corsOpts));

const apiSetUp = (app) => {
    app.use('/api', api);
}

// exporting the modules
module.exports = {
    connectToDB,
    setAPIMiddleware,
    apiSetUp
}
