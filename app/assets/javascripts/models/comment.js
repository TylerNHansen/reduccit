Redditclone.Models.Comment = Backbone.Model.extend({

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    return Backbone.sync.apply(this, arguments);
  },



  parse: function (resp) {
    if(resp.kind === 'more') return undefined;
    var commentData = _(resp.data).pick('body_html');
    if (resp.data.replies) {
      commentData.replies = new Redditclone.Collections.Comments(resp.data.replies, {parse:true});
    }
    return commentData;
  },


});
