var mongoose = require('mongoose');

const Board = mongoose.model('Board', {
  title: {
    type: String
  }
});

module.exports = { Board };