var CardView = Backbone.View.extend({
  template: App.templates.card,
  tagName: 'li',
  className: 'card-li',
  events: {
    // Card Interactions
    "click .card-link": "cardClick",
    // Card Title Interactions
    "click .btn-card-title-edit": "editTitleClick",
    "click .card-title-edit .btn-confirm": "titleSaveClick",
    "click .modal-bg": "removeCardTitleModal",
    "keydown .title-edit:focus": "titleKeyDown"
  },

  // Card Interactions

  cardClick: function(e) {
    e.preventDefault();
    AppRouter.navigate($(e.currentTarget).attr("href"), { trigger: true });
  },

  // Card Title Interactions

  editTitleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.renderCardTitleModal();
  },

  renderCardTitleModal: function() {
    var cardPosition = this.$el.offset();
    this.$el.find('.card-title-edit').css({
      'top': cardPosition.top,
      'left': cardPosition.left
    });
    this.$el.find('.title-edit').val(this.model.get('title'));
    this.$el.find('.card-title-modal').show();

    this.$el.find('.title-edit').focus();
    this.$el.find('.title-edit').select();
  },

  titleSaveClick: function(e) {
    e.preventDefault();
    var newTitle = this.$el.find('.title-edit').val();
    this.model.updateTitle(newTitle);
    this.removeCardTitleModal();
  },

  removeCardTitleModal: function() {
    this.$el.find('.card-title-modal').hide();
  },

  titleKeyDown: function(e) {
    if (e.which === 13) {
      // enter key pressed
      this.titleSaveClick(e);
    } else if (e.which === 27) {
      // esc key pressed
      this.removeCardTitleModal();
    }
  },

  // Rendering

  initialRender: function() {
    this.$el.attr('data-id', this.model.get('id'));
    this.$el.html(this.template(this.model.toJSON()));
    this.renderDesIcon();
    var $parentList = this.getInitialParentListULTag();
    $parentList.append(this.el);
  },

  renderDesIcon: function() {
    var textIcon = this.$el.find('.icon-text');
    if (this.model.get('description')) {
      textIcon.show();
    } else {
      textIcon.hide();
    }
  },

  getInitialParentListULTag: function() {
    var listID = this.model.get('currentList');
    return $(`ul[data-id="${listID}"]`).get(0);
  },

  reRenderTitle: function() {
    this.$el.find('.card-title').text(this.model.get('title'));
  },

  remove: function() {
    this.$el.remove();
  },

  initialize: function() {
    this.listenTo(this.model, 'change:title', this.reRenderTitle);
    this.listenTo(this.model, 'change:description', this.renderDesIcon);
    this.listenTo(this.model, 'destroy', this.remove);
    this.initialRender();
  }
});