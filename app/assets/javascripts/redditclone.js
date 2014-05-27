window.Redditclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.$rootEl = $('#content');
    Redditclone.router = new Redditclone.Routers.Posts({$rootEl: this.$rootEl});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Redditclone.initialize();
});
