var ListCollection = Backbone.Collection.extend({
  model: List,
  comparator: 'boardPosition',
  url: 'http://localhost:3000/api/lists',
  initialize: function() {}
});