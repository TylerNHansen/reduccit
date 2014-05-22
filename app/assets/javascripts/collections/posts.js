 Redditclone.Collections.Posts = Backbone.Collection.extend({

  model: Redditclone.Models.Post,

  url: "http://reddit.com/r/all/top.json",

});
