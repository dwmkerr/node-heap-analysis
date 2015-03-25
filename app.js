var path = require('path');
var analyse = require('./analyse');

var input = process.argv[2];

console.log("Analysing: " + input);

analyse(input, function(err, result) {
  console.log("Done.");
});