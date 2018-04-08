var List = Backbone.Model.extend({

  createCards: function() {
    this.cards = new CardCollection(_(initialData.cards).where(
      { currentList: this.get('id') }
    ));
    App.allCards.add(this.cards.models);
  },

  createAndAddNewCard: function(newCardObj) {
    newCardObj.currentList = this.get('id');
    newCardObj.listPosition = this.cards.length + 1;
    // Need to wait for sever response before firing 'add' event because server responsible for assigning 'id'
    var newCard = this.cards.create(newCardObj, { wait: true });
    App.allCards.add(newCard);
  },

  destroyCard: function(cardID) {
    this.cards.get(cardID).destroy();
    this.resetCardListPositions();
  },

  destroyAllCards: function() {
    while (this.cards.length) {
      this.cards.last().destroy();
    }
  },

  addCard: function(cardModel) {
    // The 'add' event does not need to be broadcast to the view, as change already reflected in the DOM
    this.cards.add(cardModel, { silent: true });
    cardModel.updateCurrentList(this.get('id'));
    this.resetCardListPositions();
  },

  removeCard: function(cardID) {
    var removedCard = this.cards.remove(cardID, { silent: true });
    this.resetCardListPositions();
    return removedCard;
  },

  resetCardListPositions: function() {
    // Resets values based off the current DOM state
    this.cards.each(card => {
      var cardID = card.get('id');
      var currentDOMPos = $(`li[data-id="${cardID}"]`).index() + 1;
      card.updateListPosition(currentDOMPos);
    });
    this.cards.sort();
  },

  updateTitle: function(newTitle) {
    // Only PUT request if title is changed
    if (newTitle !== this.get('title')) {
      this.save({ 'title': newTitle });
    }
  },

  updateBoardPosition(newPosition) {
    // Only PUT request if position is changed
    if (newPosition !== this.get('boardPosition')) {
      this.save({ 'boardPosition': newPosition });
    }
  },
  
  initialize: function() {
    this.createCards();
  }
});