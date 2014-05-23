Redditclone.Routers.Posts = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '': "index",
  },

  index: function () {
    var indexView = new Redditclone.Views.PostsIndex({
      collection: Redditclone.posts
    })
    Redditclone.posts.fetch();
    this._swapView(indexView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  },
});
