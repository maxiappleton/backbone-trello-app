var mongoose = require('mongoose');

const List = mongoose.model('List', {
  title: {
    type: String
  },
  currentBoard: {
    type: String
  },
  boardPosition: {
    type: Number
  }
});

module.exports = { List };