var SearchView = Backbone.View.extend({
  el: '.search-header',
  template: App.templates.searchResults,

  events: {
    // Open Search
    "click .search-btn": "searchClick",
    // Close Search
    "click .btn-search-close": "closeSearch",
    "click": "clickOutsideSearch",
    // Search Input
    "keyup .search-input:focus": "searchInputKeyUp",
    // Results Interaction
    "click .result-container a": "cardClick"
  },

  // Open Search

  searchClick: function(e) {
    e.preventDefault();
    $('body').on('click', this.clickOutsideSearch.bind(this));
    $('.search-btn').hide();
    $('.search-bar').show();
    $('.search-input').focus();
    $('.search-results').show();
  },

  // Close Search

  closeSearch: function(e) {
    e.preventDefault();
    $('body').off('click');
    $('.search-bar').hide();
    $('.search-btn').show();
    $('.search-results').hide();
    $('.card-results').html("<p class='notice'>Enter search query above!</p>");
    $('.search-input').val('');
  },

  clickOutsideSearch: function(e) {
    if (!e.target.closest('.search-header')) {
      this.closeSearch(e);
    }
  },

  // Search Input

  searchInputKeyUp: function() {
    this.delayedSearch();
  },

  executeSearch: function() {
    var searchText = $('.search-input').val();
    if (searchText) {
      var searchResults = App.returnSearchMatches(searchText);
      this.renderSearchResults(searchResults);
    } else {
      $('.card-results').html("<p class='notice'>Enter search query above!</p>");
    }
  },

  renderSearchResults: function(searchResults) {
    if (searchResults.length === 0) {
      $('.card-results').html("<p class='notice'>Sorry, couldn't find any cards that matched your search!</p>");
    } else {
      var resultsHtml = this.template({ cards: searchResults });
      $('.card-results').html(resultsHtml);
    }
  },

  // Results Interaction

  cardClick: function(e) {
    e.preventDefault();
    this.closeSearch(e);
    AppRouter.navigate($(e.currentTarget).attr("href"), { trigger: true });
  },

  initialize: function() {
    this.delayedSearch = _.debounce(this.executeSearch, 1000);
  }
});