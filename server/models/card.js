var mongoose = require('mongoose');

const Card = mongoose.model('Card', {
  title: {
    type: String
  },
  description: {
    type: String
  },
  currentList: {
    type: String
  },
  listPosition: {
    type: Number
  }
});

module.exports = { Card };