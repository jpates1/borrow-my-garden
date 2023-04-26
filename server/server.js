const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established succesfully");

  // Get list of collection names in database
  mongoose.connection.db.collections((err, collections) => {
    if (err) throw err;
    console.log("Collections:");
    console.log(collections.map(c => c.s.name));
  });
  
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

