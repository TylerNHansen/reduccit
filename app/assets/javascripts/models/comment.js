Redditclone.Models.Comment = Backbone.Model.extend({

  initialize: function (options) {
    this.url = options.url
  },

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    return Backbone.sync.apply(this, arguments);
  },

  parse: function (resp) {
    commentData = _(resp[1].data.children[0].data).pick('body_html');
    return commentData;
  },


});
