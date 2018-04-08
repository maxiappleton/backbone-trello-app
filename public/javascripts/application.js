// App

var App = {
  templates: JST,

  returnSearchMatches: function(searchStr) {
    if (!searchStr) { return []; }
    var regex = new RegExp(searchStr, 'i');

    return this.allCards.toJSON().filter(card => {
      return regex.test(card.title) || regex.test(card.description);
    });
  },

  setUpInternalData: function() {
    this.allCards = new CardCollection();
    // Triggers cascade creation of all list and card models
    this.defaultBoard = new Board(initialData.boards[0]);
  },

  renderInitialPage: function() {
    this.headerView = new HeaderView();
    this.SearchView = new SearchView();
    // Triggers cascade creation of all list and card views
    this.boardView = new BoardView({ model: this.defaultBoard });
  },
  
  init: function() {
    this.setUpInternalData();
    this.renderInitialPage();
  }
};

// Handlebars Helpers

Handlebars.registerHelper('listNameFromID', function(listID) {
  return App.defaultBoard.lists.get(listID).get('title');
});

Handlebars.registerHelper('boardNameFromListID', function(listID) {
  var boardID = App.defaultBoard.lists.get(listID).get('currentBoard');
  // Would implement this differently with multiple boards.
  return App.defaultBoard.get('title');
});






// ----------******** NOTES ******** ---------- //

// All data input, output from JSON files will lean heavily on BACKBONE.SYNC features such as .save()., .create()

// I wrote a very basic RESTful API to execute CRUD processes on my data set, so I should be able to take advantage of Backbone's Backbone.sync features on the front end.

// In developing further, would use an actual database framework, like MongoDB, to manage the backend data.

// Tough spots: HTML semantics, especially with forms and submitting data (whole Trello source code just divs and spans??), working with models and API back-end, what paths the data should flow through (I chose to go front-end to back end pretty directly), CSS organization and implementation was very time consuming (could have used Bootstrap or a library? Or Stylus from the beginning?), figuring out how data should flow through the app, especially from the DOM being manipulated (ie. through drag and drop) to the models to the back-end JSON database. 

// With user inputted data (on inputs and text areas, etc.) Could have submitted data directly to back end instead of going through models first, then syncing to API, and could have validated data on the back-end (currently very little data-validation going on).

// Chose not to use html forms and the submit/post requests directly to the backend server, back-end API limitations, largely for simplicities sake, just more comfortable running everything through the front-end first, then syncing with the server, seems like this is only feasible with a web app and a framework/library like Backbone.

// Chose Dragula because of the documentation, and the events integrated into it.



