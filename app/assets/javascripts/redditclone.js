window.Redditclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    Redditclone.router = new Redditclone.Routers.Posts($rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Redditclone.initialize();
});
