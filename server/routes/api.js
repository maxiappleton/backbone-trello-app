const express = require('express');

const { mongoose } = require('./../db/mongoose');
const { Board } = require('./../models/board');
const { Card } = require('./../models/card');
const { List } = require('./../models/list');

const router = express.Router();

//------ Lists Routes ------
router.route('/lists')
  .get((req, res) => {
    List.find()
      .then(allLists => { res.json(allLists) })
      .catch(error => { res.status(400).send(error) });
  })
  .post((req, res) => {
    const newList = new List(req.body);

    newList.save()
      .then(list => { res.json(list) })
      .catch(error => { res.status(400).send(error) });
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
    Card.find()
      .then(allCards => { res.json(allCards) })
      .catch(error => { res.status(400).send(error) });
  })
  .post((req, res) => {
    const newCard = new Card(req.body);

    newCard.save()
      .then(card => { res.json(card) })
      .catch(error => { res.status(400).send(error) });
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