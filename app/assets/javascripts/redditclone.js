window.Redditclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // this block needs to get refactored with OAUTH, temporary
    // patch to figure out how I'm querying reddit's API
    // this.reddit_app_id = "<%= ENV['REDDIT_APP_ID'] %>"
    // this.reddit_app_secret = "<%= ENV['REDDIT_APP_SECRET'] %>"
    // this.reddit_user = "<%= ENV['REDDIT_USER'] %>"
    // this.reddit_pw = "<%= ENV['REDDIT_PW'] %>"

    this.$rootEl = $('#content');
    Redditclone.posts = new Redditclone.Collections.Posts;
    Redditclone.router = new Redditclone.Routers.Posts({$rootEl: this.$rootEl});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Redditclone.initialize();
});
