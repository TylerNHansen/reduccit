Redditclone.Views.PostsIndex = Backbone.View.extend({

  initialize: function () {
    var that = this;
    $(window).bind('scroll', function (event) {
      that.checkScroll(event);
    });
    this.loading = false;
    this.listenTo(this.collection, 'sync add remove change reset', this.render);
  },

  template: JST['posts/index'],

  events: {
    'scroll .content': 'checkScroll'
  },

  render: function () {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    return this;
  },

  fetchMoreLinks: function () {
    var that = this
    console.log('fetching');
    this.collection.fetch({remove: false, success: function () {
      that.loading = false;
    }});
  },

  checkScroll: function () {
    var buffer = 300; // pixels
    if(!this.loading && ( $(window).scrollTop() === 0 || $(window).scrollTop() + $(window).height() + buffer > $(document).height()) ){
      this.loading = true;
      this.fetchMoreLinks();
    }
  },

});
