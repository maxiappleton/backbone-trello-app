var BoardView = Backbone.View.extend({
  template: App.templates.board,
  el: '.board',

  events: {
    "click .btn-board-header": "clickHeaderBtn",
    // Add List Interactions
    "click .add-list": "addListClick",
    "click .add-list-input .btn-confirm": "confirmAddNewListClick",
    "click .btn-close-list-input": "closeAddList",
    "keydown .new-list-title:focus": "addListKeyDown"
  },

  clickHeaderBtn: function (e) {
    e.preventDefault();
  },

  // Add List Interactions

  addListClick: function (e) {
    e.preventDefault();
    var self = this;
    self.$el.find('.add-list').slideUp(200, function () {
      self.$el.find('.add-list-input').slideDown();
    });
  },

  confirmAddNewListClick: function (e) {
    e.preventDefault();
    var newListTitle = this.$el.find('.new-list-title').val();
    this.model.createAndAddNewList({ 'title': newListTitle });
    this.closeAddList(e);
  },

  closeAddList: function (e) {
    e.preventDefault();
    this.$el.find('.new-list-title').val('');
    this.$el.find('.add-list-input').hide();
    this.$el.find('.add-list').show();
  },

  addListKeyDown: function (e) {
    // enter key pressed
    if (e.which === 13) {
      this.confirmAddNewListClick(e);
    } else if (e.which === 27) {
      // esc key pressed
      this.closeAddList(e);
    }
  },

  // Rendering

  initialRender: function () {
    this.$el.attr('data-id', this.model.get('_id'));
    this.$el.html(this.template(this.model.toJSON()));
    this.setUpDragula();
    this.renderLists();
  },

  setUpDragula: function () {
    this.dragulaCards = dragula({ revertOnSpill: true });
    this.dragulaLists = dragula([document.querySelector('.user-lists')], {
      invalid: function (el, handle) {
        return !$(handle).hasClass('list-title');
      },
      direction: 'horizontal',
      revertOnSpill: true
    });

    this.dragulaCards.on('drop', this.model.handleCardDrop.bind(this.model));
    this.dragulaLists.on('drop', this.model.handleListDrop.bind(this.model));
  },

  renderLists: function () {
    this.model.lists.each(list => {
      this.renderOneList(list);
    });
  },

  renderOneList: function (listModel) {
    var newListView = new ListView({ model: listModel });
    this.dragulaCards.containers.push(newListView.el.querySelector('.list-ul'));
  },

  initialize: function () {
    this.listenTo(this.model.lists, 'add', this.renderOneList);
    this.initialRender();
  }
});