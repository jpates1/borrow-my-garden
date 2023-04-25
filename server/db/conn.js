const { MongoClient } = require("mongodb");
// const ATLAS_URI="mongodb+srv://TeamAllotment:qcLX25ZQRPwNTWr8@borrow-my-garden.6typkvu.mongodb.net/borrow-my-garden?retryWrites=true&w=majority";
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      
      if (db)
      {
        _db = db.db("borrow-my-garden");
        console.log("Successfully connected to MongoDB."); 
      } 
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};

/* const { MongoClient } = require("mongodb"); 
const Db = process.env.ATLAS_URI; 
const client = new MongoClient(Db, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
 }); 
  
  let _db; 
  
  module.exports = { 
    connectToServer: function (callback) { 
      client.connect(function (err, db) { 
        if (err) { 
          console.error(err); return callback(err); } _db = db.db("borrow-my-garden"); console.log("Successfully connected to MongoDB."); return callback(); }); }, getDb: function () { return _db; }, }; */