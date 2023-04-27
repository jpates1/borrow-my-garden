const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;

let _db;

async function connectToServer() {
  console.log(_db)
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  _db = client.db("borrow-my-garden");
  console.log("Successfully connected to MongoDB.");
}

function getDb() {
  return _db;
}

module.exports = { connectToServer, getDb };


// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
//  console.log("works outside of function")
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//        console.log("works inside of function")

//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("borrow-my-garden");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };