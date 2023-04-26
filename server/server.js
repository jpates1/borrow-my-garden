const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config();
const port = process.env.PORT || 2000;
const JWT = require("jsonwebtoken");

const gardensRouter = require("./routes/gardens");
const tokensRouter = require("./routes/tokens");
const usersRouter = require("./routes/users");


app.use(cors());
app.use(express.json());

const tokenChecker = (req, res, next) => {

  let token;
  const authHeader = req.get("Authorization")

  if(authHeader) {
    token = authHeader.slice(7)
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if(err) {
      console.log(err)
      res.status(401).json({message: "auth error"});
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

app.use("/gardens", tokenChecker, gardensRouter);
app.use("/tokens", tokensRouter);
app.use("/users", usersRouter);


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

