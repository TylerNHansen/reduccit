 Redditclone.Collections.Posts = Backbone.Collection.extend({


   initialize: function (options) {
     if(options){
       this.subreddit = options.subreddit || "all"
     } else {
       this.subreddit = "all"
     }
   },

  model: Redditclone.Models.Post,

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    options.url=this.morePostsUrl();

    return Backbone.sync.apply(this, arguments);
  },

  morePostsUrl: function () {
    return this.urlBase + this.subreddit + this.urlOptions + this.after;
  },

  after: "",

  urlBase: "http://reddit.com/r/",
  urlOptions: ".json?jsonp=?&limit=15&after=",


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
