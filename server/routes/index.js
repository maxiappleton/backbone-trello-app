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
    // Blank data returned if a DB error
  }

  return result;
}

module.exports = router;

