var Board = Backbone.Model.extend({

  createLists: function () {
    this.lists = new ListCollection(_(initialData.lists).where(
      { currentBoard: this.get('_id') }
    ));
  },

  createAndAddNewList: function (newListObj) {
    newListObj.currentBoard = this.get('_id');
    newListObj.boardPosition = this.lists.length + 1;
    // Need to wait for sever response before firing 'add' event because server responsible for assigning 'id'
    this.lists.create(newListObj, { wait: true });
  },

  destroyList: function (listID) {
    var list = this.lists.get(listID);
    list.destroyAllCards();
    list.destroy();
    this.resetListBoardPositions();
  },

  resetListBoardPositions: function () {
    // Resets values based off the current DOM state
    this.lists.each(list => {
      var listID = list.get('_id');
      var currentDOMPos = $(`div[data-id="${listID}"]`).index() + 1;
      list.updateBoardPosition(currentDOMPos);
    });
    this.lists.sort();
  },

  handleListDrop: function () {
    this.resetListBoardPositions();
  },

  handleCardDrop: function (el, target, source) {
    var targetListID = target.dataset.id;
    var sourceListID = source.dataset.id;
    var cardID = el.dataset.id;

    // If no list transfer
    if (targetListID === sourceListID) {
      this.lists.get(targetListID).resetCardListPositions();
    } else {
      var cardModel = this.lists.get(sourceListID).removeCard(cardID);
      this.lists.get(targetListID).addCard(cardModel);
    }
  },

  idAttribute: '_id',

  initialize: function () {
    this.createLists();
  }
});