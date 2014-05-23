Redditclone.Models.Post = Backbone.Model.extend({


  parse: function (resp) {
    return _(resp.data).pick('url', 'title');
  },
});
