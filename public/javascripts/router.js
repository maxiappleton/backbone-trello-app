var AppRouter = new (Backbone.Router.extend({
  routes: {
    '': 'indexRoute',
    ':cardID': 'cardModalRoute'
  },

  indexRoute: function() {
    if (!App.boardView) {
      App.init();
    } else {
      // Refreshes the page view components
      App.boardView.initialRender();
    }
  },

  cardModalRoute: function(cardID) {
    if (!App.boardView) {
      App.init();
    }

    var cardModel = App.allCards.get(cardID);
    this.modalView = new CardModalView({ model: cardModel });
  }
}))();

// Initialize Backbone history
Backbone.history.start({ pushState: true });

// For reloading the index page when using the browser back input from the modal view
Backbone.history.on('route', function() {
  if (!Backbone.history.getFragment()) {
    AppRouter.modalView.hideAndRemoveModal();
    AppRouter.navigate('/', { trigger: true });
  }
});