
console.log(__filename);
console.log(__dirname);

// Example 
const url = 'http://mylogger.io/log';

function log(message) {
  // Send a HTTP request
  console.log(message);
}

module.exports = log;

/* 
  Note in module u can export a single function 
  or an object
  ex: module.exports = log;
      module.exports.log = log;
*/