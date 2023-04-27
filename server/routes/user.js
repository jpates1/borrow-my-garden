const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();
 
// This will help us connect to the database
const { connectToServer, getDb } = require('../db/conn');

// const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the users.
userRoutes.route("/user").get(function (req, res) {
  const db = getDb();  //("borrow-my-garden");
 db
   .collection("users")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// Get a single user by id
userRoutes.route("/user/:id").get(function (req, res) {
  const db = getDb();
  const myquery = { _id: ObjectId(req.params.id) };
 db
   .collection("users")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// CREATE a new user.
userRoutes.route("/user/add").post(function (req, response) {
  const db = getDb();
  const myobj = {
   userName: req.body.userName,
   email: req.body.email,
   password: req.body.password,
 };
 db.collection("users").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// UPDATE a user by id.
userRoutes.route("/update/:id").post(function (req, response) {
  const db = getDb();
  const myquery = { _id: ObjectId(req.params.id) };
 const newvalues = {
   $set: {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
   },
 };
 db
   .collection("users")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 user updated");
     response.json(res);
   });
});
 
// DELETE a user
userRoutes.route("/:id").delete((req, response) => {
  const db = getDb();
  const myquery = { _id: ObjectId(req.params.id) };
 db.collection("users").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 user deleted");
   response.json(obj);
 });
});
 
module.exports = userRoutes;