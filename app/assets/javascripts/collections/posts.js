 Redditclone.Collections.Posts = Backbone.Collection.extend({

  model: Redditclone.Models.Post,

  url: "/api/reddit/test",

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    options.url=this.morePostsUrl();

    return Backbone.sync.apply(this, arguments);
  },

  morePostsUrl: function () {
    return "http://reddit.com/r/all.json?jsonp=?&limit=15&after=" + this.after;
  },

  after: "",

  parse: function (resp) {
    if(resp.data.after){
      // update URL for getting more posts with the pagination link
      this.after = resp.data.after
    }
    var children = [];
    if(resp.data.children){
      _(resp.data.children).each(function (childData) {
        children.push(new Redditclone.Models.Post(childData, {parse: true}));
      })
      delete resp.data.children
    }
    return children;
  },
});
