var express = require('express');
var fs = require ('fs');
var buf = require ('buf');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer (fs.readFileSync("index.html"), "utf-8");
  response.send(buffer.toString('utf-8', 0, 27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
