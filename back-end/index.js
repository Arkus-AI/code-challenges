const express = require("express");
const app = express();
const db = require('./db.config');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoute = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/movies', movieRoute);
mongoose.Promise = global.Promise;
mongoose.connect(db.url, {
  useNewUrlParser: true
}).
  then(() => {
    console.log("Databse Connected Successfully!!");
  })
  .catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
  });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
