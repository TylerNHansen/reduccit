window.Redditclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.$rootEl = $('#content');
    Redditclone.router = new Redditclone.Routers.Posts({$rootEl: this.$rootEl});
    Backbone.history.start();
    this.over18 = false;
  }
};

$(document).ready(function(){
  Redditclone.initialize();
});
