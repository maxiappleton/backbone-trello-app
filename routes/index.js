var express = require('express');
var path = require('path');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    data: getJSONData()
  });
});

router.get('/:cardID', function(req, res, next) {
  res.render('index', { 
    data: getJSONData()
  });
});

// Retrieve JSON Data to pass to Jade template for bootstrapping initial page load
function getJSONData() {
  var filePath = path.resolve(path.dirname(__dirname), "./data");
  var result = {};
  ['boards', 'cards', 'lists'].forEach(type => {
    var string = fs.readFileSync(filePath + `/${type}.json`, 'utf8');
    result[type] = JSON.parse(string);
  });
  return result;
}

module.exports = router;
