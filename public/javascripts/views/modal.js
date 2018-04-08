var CardModalView = Backbone.View.extend({
  template: App.templates.cardModal,
  events: {
    // Card Title Interactions
    "blur .modal-card-title": "submitNewCardTitle",
    "keydown .modal-card-title:focus": "cardTitleKeyDown",
    // Card Description Interactions
    "click .des-text, .des-default, .edit-des": "editClick",
    "click .editable-description .btn-confirm": "editSave",
    "click .btn-close-des-edit": "closeEdit",
    // Other Interactions
    "click .btn-delete": "deleteClick",
    "click .modal-bg, .btn-close-modal": "hideAndRemoveModal"
  },

  // Card Title Interactions

  submitNewCardTitle: function() {
    var newTitle = this.$el.find('.modal-card-title').val();
    this.model.updateTitle(newTitle);
  },

  cardTitleKeyDown: function(e) {
    // enter or esc key pressed
    if (e.which === 13 || e.which === 27) {
      this.$el.find('.modal-card-title').blur();
    }
  },

  // Card Description Interactions

  editClick: function(e) {
    e.preventDefault();
    $('.description').hide();
    $('.editable-description').show();
  },

  editSave: function(e) {
    e.preventDefault();
    var newDescription = $('.des-textarea').val();
    this.model.updateDescription(newDescription);
    this.closeEdit(e);
  },

  closeEdit: function(e) {
    e.preventDefault();
    $('.des-textarea').val(this.model.get('description'));
    $('.editable-description').hide();
    $('.description').show();
  },

  // Other Interactions

  deleteClick: function(e) {
    e.preventDefault();
    if (confirm("Do you really want to delete this card?")){
      var cardID = this.model.get('id');
      var listID = this.model.get('currentList');
      App.defaultBoard.lists.get(listID).destroyCard(cardID);
      this.hideAndRemoveModal(e);
    }  
  },

  hideAndRemoveModal: function(e) {
    if (e) { e.preventDefault(); }
    AppRouter.navigate('/');
    this.$el.fadeOut('400', function() { $(this).remove(); });
  },

  // Rendering

  initialRender: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('main').append(this.$el);
  },

  reRender: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.reRender);
    this.initialRender();
  }
});