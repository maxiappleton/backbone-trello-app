this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"flex-container\">\n  <div>\n    <a href=\"#\" class=\"btn-board-header board-title\">\n      <span class=\"text-btn bold\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n    </a>\n    <a href=\"#\" class=\"btn-board-header\">\n      <span class=\"icon-star\"></span>\n    </a>\n    <span class=\"vertical-line\"></span>\n    <a href=\"#\" class=\"btn-board-header\">\n      <span class=\"text-btn\">Personal</span>\n    </a>\n    <span class=\"vertical-line\"></span>\n    <a href=\"#\" class=\"btn-board-header\">\n      <span class=\"icon-private\"></span>\n      <span class=\"text-btn\">Private</span>\n    </a>\n  </div>\n  <div>\n    <a href=\"#\" class=\"btn-board-header show-menu\">\n      <span class=\"icon-menu\"></span><!--\n      --><span class=\"text-btn\">Show Menu</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"all-lists flex-container\">\n  <div class=\"user-lists flex-container\"></div>\n  <div class=\"add-list-container\">\n    <a href=\"#\" class=\"add-list\">\n      <span>Add a list...</span>\n    </a>\n    <div class=\"add-list-input hidden\">\n      <input class=\"new-list-title\" placeholder=\"Add a list...\">\n      <div>\n        <a href=\"#\" class=\"btn-confirm\">Save</a>\n        <a href=\"#\" class=\"btn-close-list-input\">\n          <span class=\"icon-close\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"flex-container\">  \n  <a href=\"/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"card-link\">\n    <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"icon-text\"></span>\n  </a>\n  <a href=\"#\" class=\"btn-card-title-edit\">\n    <span class=\"icon-edit hidden\"></span>\n  </a>\n</div>\n\n<div class=\"card-title-modal hidden\">\n  <div class=\"modal-bg\"></div>\n  <div class=\"card-title-edit\">\n    <textarea class=\"title-edit\"></textarea>\n    <a href=\"#\" class=\"btn-confirm\">Save</a>\n  </div>\n</div>";
},"useData":true});

this["JST"]["cardModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <p class=\"des-text\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"des-default\">\n        <span class=\"icon-text\"></span>\n        <p>Edit the description...</p>\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-bg\"></div>\n<div class=\"card-modal\">\n  <div class=\"flex-container\">\n    <span class=\"icon-layout\"></span>\n    <input class=\"modal-card-title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    <a href=\"#\" class=\"btn-close-modal\">\n      <span class=\"icon-close\"></span>\n    </a>\n  </div>\n  \n  <div class=\"card-details\">\n    <h3>in list <a href=\"\">"
    + alias4((helpers.listNameFromID || (depth0 && depth0.listNameFromID) || alias2).call(alias1,(depth0 != null ? depth0.currentList : depth0),{"name":"listNameFromID","hash":{},"data":data}))
    + "</a></h3>\n    <h3>Description: <a href=\"#\" class=\"edit-des\">Edit</a></h3>\n\n    <div class=\"description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"editable-description hidden\">\n      <textarea class=\"des-textarea\" placeholder=\"Add a more detailed description...\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n      <div>\n        <a href=\"#\" class=\"btn-confirm\">Save</a>\n        <a href=\"#\" class=\"btn-close-des-edit\">\n          <span class=\"icon-close\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n  <a href=\"#\" class=\"btn-delete\">Delete Card</a>\n</div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"flex-container\">\n  <div class=\"grid-grouping\">\n    <a href=\"#\" class=\"btn-header\">\n      <span class=\"icon-back\"></span>\n    </a>\n    <a href=\"#\" class=\"btn-header\">\n      <span class=\"icon-trello\"></span>\n      <span class=\"text-btn\">Boards</span>\n    </a>\n    <div class=\"search-header\">\n      <a href=\"#\" class=\"btn-header search-btn\">\n        <span class=\"icon-search\"></span>\n      </a>\n      <div class=\"search-bar hidden\">\n        <input type=\"search\" placeholder=\"Enter search query here\" class=\"search-input\">\n        <a href=\"#\" class=\"btn-search-close\">\n          <span class=\"icon-close\"></span>\n        </a>\n      </div>\n      <div class=\"search-results hidden\">\n        <div class=\"card-results\">\n          <p class=\"notice\">Enter search query above!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"flex-container header-right\">\n    <a href=\"/\" class=\"header-logo\">\n      <span class=\"icon-trello-logo\"></span>\n    </a>\n    <div class=\"grid-grouping\">\n      <a href=\"#\" class=\"btn-header\">\n        <span class=\"icon-add\"></span>\n      </a>\n      <a href=\"#\" class=\"btn-header\">\n        <span class=\"icon-info\"></span>\n      </a>\n      <a href=\"#\" class=\"btn-header\">\n        <span class=\"icon-bell\"></span>\n      </a>\n      <a href=\"#\" class=\"user-icon\">\n        <span>MA</span>\n      </a>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"flex-container\">\n\n  <h3 class=\"list-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n  <input class=\"list-title-edit hidden\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n\n  <a href=\"#\" class=\"btn-menu\">\n    <span class=\"icon-menu-grey\"></span>\n  </a>\n\n  <div class=\"list-menu hidden\">\n    <div class=\"list-menu-bg\"></div>\n    <div class=\"menu-container\">\n      <div class=\"menu-header flex-container\">\n        <h2>List Actions</h2>\n        <a href=\"#\" class=\"btn-close-menu\">\n          <span class=\"icon-close\"></span>\n        </a>\n      </div>\n      <hr>\n      <a href=\"#\" class=\"btn-delete\">Delete List</a>\n    </div>\n  </div>\n  \n</div>\n\n<ul class=\"list-ul\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></ul>\n\n<a href=\"#\" class=\"add-card\">\n  <span>Add a card...</span>\n</a>\n\n<div class=\"add-card-input hidden\">\n  <textarea class=\"add-card-textarea\"></textarea>\n  <div>\n    <a href=\"#\" class=\"btn-confirm\">Add</a>\n    <a href=\"#\" class=\"btn-close-add-card-input\">\n      <span class=\"icon-close\"></span>\n    </a>\n  </div>\n</div>\n";
},"useData":true});

this["JST"]["searchResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"result-container\">\n  <a href=\"/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"search-card\">\n      <span class=\"search-card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "   </div>\n  </a>\n  <div class=\"search-card-info\">\n    <p class=\"bold\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"search-info-details\">in <span class=\"bold\">"
    + alias4((helpers.listNameFromID || (depth0 && depth0.listNameFromID) || alias2).call(alias1,(depth0 != null ? depth0.currentList : depth0),{"name":"listNameFromID","hash":{},"data":data}))
    + "</span> on <span class=\"bold\">"
    + alias4((helpers.boardNameFromListID || (depth0 && depth0.boardNameFromListID) || alias2).call(alias1,(depth0 != null ? depth0.currentList : depth0),{"name":"boardNameFromListID","hash":{},"data":data}))
    + "</span></p>\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"icon-text\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Cards</h2>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});