var HeaderView = Backbone.View.extend({
  el: 'header',
  template: App.templates.header,
  events: {
    "click .btn-header, .user-icon": "headerBtnClick"
  },

  headerBtnClick: function(e) {
    e.preventDefault();
  },

  render: function() {
    this.$el.html(this.template());
  },

  initialize: function() {
    this.render();
  },
});