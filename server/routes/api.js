const express = require('express');


// Do I need these files?
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('underscore');


// Do I need this file? Don't think so?
const { mongoose } = require('./../db/mongoose');


const { Board } = require('./../models/board');
const { Card } = require('./../models/card');
const { List } = require('./../models/list');

const router = express.Router();

//------ Boards Routes ------
router.route('/boards')
  .get((req, res) => {
    Board.find().then(
      (allBoards) => { res.json(allBoards) },
      (err) => { res.status(400).send(err) }
    );
  })
  .post((req, res) => {
    const newBoard = new Board(req.body);
    newBoard.save().then(
      (board) => { res.json(board) },
      (error) => { res.status(400).send(error) }
    );
  });

// router.route('/boards/:boardID')
//   .get((req, res) => {
//     var allBoards = getData('boards');
//     res.json(_(allBoards).findWhere({ id: +req.params.boardID }));
//   })
//   .put((req, res) => {
//     var updatedBoard = handlePUT(req, +req.params.boardID, 'boards');
//     res.json(updatedBoard);
//   })
//   .delete((req, res) => {
//     handleDELETE(req, +req.params.boardID, 'boards');
//     res.status(200).end();
//   });


//------ Lists Routes ------
router.route('/lists')
  .get((req, res) => {
    List.find().then(
      (allLists) => { res.json(allLists) },
      (err) => { res.status(400).send(err) }
    );
  })
  .post((req, res) => {
    const newList = new List(req.body);

    newList.save().then(
      (list) => { res.json(list) },
      (error) => { res.status(400).send(error) }
    );
  });

router.route('/lists/:listID')
  .get((req, res) => {
    List.findOne({ _id: req.params.listID })
      .then(list => {
        if (!list) { res.status(404).send(); }
        res.json(list);
      })
      .catch(err => res.status(400).send());
  })
  .put((req, res) => {
    List.findOneAndUpdate({ _id: req.params.listID }, req.body, { new: true })
      .then(list => {
        if (!list) { res.status(404).send(); }
        res.json(list);
      })
      .catch(err => res.status(400).send());
  })
  .delete((req, res) => {
    List.findOneAndRemove({ _id: req.params.listID })
      .then(list => {
        if (!list) { res.status(404).send(); }
        res.json(list);
      })
      .catch(err => res.status(400).send());
  });


//------ Cards Routes ------

router.route('/cards')
  .get((req, res) => {
    Card.find().then(
      (allCards) => { res.json(allCards) },
      (err) => { res.status(400).send(err) }
    );
  })
  .post((req, res) => {
    const newCard = new Card(req.body);

    newCard.save().then(
      (card) => { res.json(card) },
      (error) => { res.status(400).send(error) }
    );
  });

router.route('/cards/:cardID')
  .get((req, res) => {
    Card.findOne({ _id: req.params.cardID })
      .then(card => {
        if (!card) { res.status(404).send(); }
        res.json(card);
      })
      .catch(err => res.status(400).send());
  })
  .put((req, res) => {
    Card.findOneAndUpdate({ _id: req.params.cardID }, req.body, { new: true })
      .then(card => {
        if (!card) { res.status(404).send(); }
        res.json(card);
      })
      .catch(err => res.status(400).send());
  })
  .delete((req, res) => {
    Card.findOneAndRemove({ _id: req.params.cardID })
      .then(card => {
        if (!card) { res.status(404).send(); }
        res.json(card);
      })
      .catch(err => res.status(400).send());
  });

module.exports = router;