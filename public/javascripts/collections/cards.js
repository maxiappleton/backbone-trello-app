var CardCollection = Backbone.Collection.extend({
  model: Card,
  comparator: 'listPosition',
  url: `${window.location.protocol}//${window.location.host}/api/cards`,
  initialize: function () { }
});