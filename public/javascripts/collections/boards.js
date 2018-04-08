var Boards = Backbone.Collection.extend({
  model: Board,
  url: 'http://localhost:3000/api/boards',
  initialize: function() {}
});