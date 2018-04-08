var CardCollection = Backbone.Collection.extend({
  model: Card,
  comparator: 'listPosition',
  url: 'http://localhost:3000/api/cards',
  initialize: function() {}
});