var http = require('http');

// Retrieve
//var MongoClient = require('mongodb').MongoClient;

// Connect to the db
/*MongoClient.connect("mongodb://"+process.env.DB_HOST, function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
    console.err(err);
  }
});
*/

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Runnable! Again, Testing notifications!\n');
  console.log("Moment of truth.")
}).listen(80);
console.log('Server running at http://127.0.0.1:80/');
