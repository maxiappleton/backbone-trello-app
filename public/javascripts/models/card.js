var Card = Backbone.Model.extend({
  defaults: {
    'description': ''
  },

  updateTitle: function(newTitle) {
    // Empty title not valid
    if (!newTitle) {
      return;
    // Only PUT request if title is changed
    } else if (newTitle !== this.get('title')) {
      this.save({ 'title': newTitle });
    }
  },

  updateDescription: function(newDescription) {
    // Only PUT request if description is changed
    if (newDescription !== this.get('description')) {
      this.save({ 'description': newDescription });
    }
  },

  updateListPosition(newPosition) {
    // Only PUT request if position is changed
    if (newPosition !== this.get('listPosition')) {
      this.save({ 'listPosition': newPosition });
    }
  },

  updateCurrentList(newListID) {
    this.save({ 'currentList': newListID });
  },

  initialize: function() {}
});