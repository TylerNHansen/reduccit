Redditclone.Routers.Posts = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '': 'index',
    'new': 'postForm',
    ':sub': 'subreddit',
  },

  index: function () {
    Redditclone.posts = new Redditclone.Collections.Posts();
    var indexView = new Redditclone.Views.PostsIndex({
      collection: Redditclone.posts
    })
    Redditclone.posts.fetch();
    this._swapView(indexView);
  },

  subreddit: function (sub) {
    Redditclone.posts = new Redditclone.Collections.Posts({
      subreddit: sub
    });
    var indexView = new Redditclone.Views.PostsIndex({
      collection: Redditclone.posts
    })
    Redditclone.posts.fetch();
    this._swapView(indexView);
  },

  postForm: function () {
    var newView = new Redditclone.Views.PostNew({});
    this._swapView(newView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  },
});
