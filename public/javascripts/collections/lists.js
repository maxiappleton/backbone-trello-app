var ListCollection = Backbone.Collection.extend({
  model: List,
  comparator: 'boardPosition',
  url: `${window.location.protocol}//${window.location.host}/api/lists`,
  initialize: function () { }
});