Redditclone.Models.Comment = Backbone.Model.extend({

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    return Backbone.sync.apply(this, arguments);
  },

  parse: function (resp) {
    commentData = _(resp.data).pick('body_html');
    commentData.replies = new Redditclone.Collections.Comments(resp.data.replies, {parse: true})
    return commentData;
  },


});