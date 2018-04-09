var express = require('express');

const { mongoose } = require('./../db/mongoose');
const { Board } = require('./../models/board');
const { Card } = require('./../models/card');
const { List } = require('./../models/list');

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index', {
    data: await getJSONData()
  });
});

router.get('/:cardID', async function (req, res, next) {
  res.render('index', {
    data: await getJSONData()
  });
});

// Retrieve JSON Data to pass to Jade template for bootstrapping initial page load
// function getJSONData() {
//   var filePath = path.resolve(path.dirname(__dirname), "./data");
//   var result = {};
//   ['boards', 'cards', 'lists'].forEach(type => {
//     var string = fs.readFileSync(filePath + `/${type}.json`, 'utf8');
//     result[type] = JSON.parse(string);
//   });
//   return result;
// }

async function getJSONData() {
  const result = {
    boards: [],
    lists: [],
    cards: []
  };

  try {
    result.boards = await Board.find();
    result.lists = await List.find();
    result.cards = await Card.find();
  } catch (error) {

  }

  return result;
}

module.exports = router;

