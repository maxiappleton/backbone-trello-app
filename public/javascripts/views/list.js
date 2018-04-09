var ListView = Backbone.View.extend({
  template: App.templates.list,
  className: 'list-container',
  events: {
    // List Title Interactions
    "click .list-title": "editListTitle",
    "blur .list-title-edit": "submitNewListTitle",
    "keydown .list-title-edit:focus": "listTitleKeyDown",
    // Add Card Interactions
    "click .add-card": "addCardClick",
    "click .add-card-input .btn-confirm": "confirmAddCardClick",
    "click .btn-close-add-card-input": "closeAddCard",
    "keydown .add-card-textarea:focus": "addCardKeyDown",
    // List Menu Interactions
    "click .btn-menu": "showListMenu",
    "click .list-menu-bg": "closeListMenu",
    "click .btn-close-menu": "closeListMenu",
    "click .btn-delete": "deleteClick"
  },

  // List Title Interactions

  editListTitle: function () {
    this.$el.find('.list-title').hide();
    this.$el.find('.list-title-edit').show().select();
  },

  submitNewListTitle: function () {
    var newTitle = this.$el.find('.list-title-edit').val();
    this.model.updateTitle(newTitle);
    this.$el.find('.list-title').text(newTitle);
    this.$el.find('.list-title-edit').hide();
    this.$el.find('.list-title').show();
  },

  listTitleKeyDown: function (e) {
    // enter or esc key pressed
    if (e.which === 13 || e.which === 27) {
      this.$el.find('.list-title-edit').blur();
    }
  },

  // Add Card Interactions

  addCardClick: function (e) {
    e.preventDefault();
    var self = this;
    self.$el.find('.add-card').slideUp(200, function () {
      self.$el.find('.add-card-input').slideDown();
    });
    this.$el.find('.add-card-textarea').focus();
    this.$el.find('.add-card-textarea').select();
  },

  confirmAddCardClick: function (e) {
    e.preventDefault();
    var newCardTitle = this.$el.find('.add-card-textarea').val();
    this.model.createAndAddNewCard({ 'title': newCardTitle });
    this.closeAddCard(e);
  },

  closeAddCard: function (e) {
    e.preventDefault();
    this.$el.find('.add-card-textarea').val('');
    this.$el.find('.add-card-input').hide();
    this.$el.find('.add-card').show();
  },

  addCardKeyDown: function (e) {
    // if enter key pressed
    if (e.which === 13) {
      this.confirmAddCardClick(e);
    } else if (e.which === 27) {
      // esc key pressed
      this.closeAddCard();
    }
  },

  // List Menu Interactions

  showListMenu: function (e) {
    e.preventDefault();
    var btnPos = this.$el.find('.btn-menu').offset();
    this.$el.find('.menu-container').css({
      'top': btnPos.top + 30,
      'left': btnPos.left
    });
    this.$el.find('.list-menu').show();
  },

  closeListMenu: function (e) {
    e.preventDefault();
    this.$el.find('.list-menu').hide();
  },

  deleteClick: function (e) {
    e.preventDefault();
    if (confirm("Do you really want to delete this list? All its cards will also be deleted.")) {
      // Theoretically could access board by 'this.model.currentBoard' ID if there were a collection of multiple boards to draw from
      App.defaultBoard.destroyList(this.model.get('_id'));
      this.closeListMenu(e);
    }
  },

  // Rendering

  initialRender: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('data-id', this.model.get('_id'));
    $('.user-lists').append(this.$el);
    this.renderCards();
  },

  renderCards: function () {
    this.model.cards.each(card => {
      this.renderOneCard(card);
    });
  },

  renderOneCard: function (cardModel) {
    new CardView({ model: cardModel });
  },

  remove: function () {
    this.$el.remove();
  },

  initialize: function () {
    this.listenTo(this.model.cards, 'add', this.renderOneCard);
    this.listenTo(this.model, 'destroy', this.remove);
    this.initialRender();
  }
});