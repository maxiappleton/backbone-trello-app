var express = require('express');
var _ = require("underscore");
var path = require('path');
var fs = require('fs');

var router = express.Router();
var filePath = path.resolve(path.dirname(__dirname), "data");

function getData(dataType) {
  return JSON.parse(fs.readFileSync(filePath + `/${dataType}.json`, 'utf8'));
}

function setData(newData, dataType) {
  fs.writeFileSync(filePath + `/${dataType}.json`, JSON.stringify(newData), 'utf8');
}

function getNextID(existingData) {
  return existingData.length === 0 ? 1 : existingData.slice(-1)[0].id + 1;
}

function handlePOST(req, dataType) {
  var newObj = req.body;
  var allObj = getData(dataType);
  newObj.id = getNextID(allObj);
  allObj.push(newObj);
  setData(allObj, dataType);

  return newObj;
}

function handlePUT(req, id, dataType) {
  var allObjs = getData(dataType);
  var obj = _(allObjs).findWhere({ id: id });
  _.extend(obj, req.body);
  setData(allObjs, dataType);

  return obj;
}

function handleDELETE(req, id, dataType) {
  var allObjs = getData(dataType);
  var updatedObjs = _(allObjs).reject(obj => obj.id === id);
  setData(updatedObjs, dataType);
}

router.route('/boards')
  .get((req, res) => {
    res.json(getData('boards'));
  })
  .post((req, res) => {
    var newBoard = handlePOST(req, 'boards');
    res.json(newBoard);
  });

router.route('/boards/:boardID')
  .get((req, res) => {
    var allBoards = getData('boards');
    res.json(_(allBoards).findWhere({ id: +req.params.boardID }));
  })
  .put((req, res) => {
    var updatedBoard = handlePUT(req, +req.params.boardID, 'boards');
    res.json(updatedBoard);
  })
  .delete((req, res) => {
    handleDELETE(req, +req.params.boardID, 'boards');
    res.status(200).end();
  });  

router.route('/lists')
  .get((req, res) => {
    res.json(getData('lists'));
  })
  .post((req, res) => {
    var newList = handlePOST(req, 'lists');
    res.json(newList);
  });

router.route('/lists/:listID')
  .get((req, res) => {
    var allLists = getData('lists');
    res.json(_(allLists).findWhere({ id: +req.params.listID }));
  })
  .put((req, res) => {
    var updatedList = handlePUT(req, +req.params.listID, 'lists');
    res.json(updatedList);
  })
  .delete((req, res) => {
    handleDELETE(req, +req.params.listID, 'lists');
    res.status(200).end();
  });

router.route('/cards')
  .get((req, res) => {
    res.json(getData('cards'));
  })
  .post((req, res) => {
    var newCard = handlePOST(req, 'cards');
    res.json(newCard);
  });

router.route('/cards/:cardID')
  .get((req, res) => {
    var allCards = getData('cards');
    res.json(_(allCards).findWhere({ id: +req.params.cardID }));
  })
  .put((req, res) => {
    var updatedCard = handlePUT(req, +req.params.cardID, 'cards');
    res.json(updatedCard);
  })
  .delete((req, res) => {
    handleDELETE(req, +req.params.cardID, 'cards');
    res.status(200).end();
  });

module.exports = router;
