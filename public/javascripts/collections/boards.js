var Boards = Backbone.Collection.extend({
  model: Board,
  url: `${window.location.protocol}//${window.location.host}/api/boards`,
  initialize: function () { }
});