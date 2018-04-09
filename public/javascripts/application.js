// App

var App = {
  templates: JST,

  returnSearchMatches: function (searchStr) {
    if (!searchStr) { return []; }
    var regex = new RegExp(searchStr, 'i');

    return this.allCards.toJSON().filter(card => {
      return regex.test(card.title) || regex.test(card.description);
    });
  },

  setUpInternalData: function () {
    this.allCards = new CardCollection();
    // Triggers cascade creation of all list and card models
    this.defaultBoard = new Board(initialData.boards[0]);
  },

  renderInitialPage: function () {
    this.headerView = new HeaderView();
    this.SearchView = new SearchView();
    // Triggers cascade creation of all list and card views
    this.boardView = new BoardView({ model: this.defaultBoard });
  },

  init: function () {
    this.setUpInternalData();
    this.renderInitialPage();
  }
};

// Handlebars Helpers

Handlebars.registerHelper('listNameFromID', function (listID) {
  return App.defaultBoard.lists.get(listID).get('title');
});

Handlebars.registerHelper('boardNameFromListID', function (listID) {
  var boardID = App.defaultBoard.lists.get(listID).get('currentBoard');
  // Would implement this differently with multiple boards.
  return App.defaultBoard.get('title');
});