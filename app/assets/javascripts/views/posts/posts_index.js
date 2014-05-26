Redditclone.Views.PostsIndex = Backbone.View.extend({

  initialize: function () {
    var that = this;
    $(window).bind('scroll', function (event) {
      that.checkScroll(event);
    });
    this.loading = false;
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['posts/index'],
  headline: JST['posts/headline'],

  events: {
    'scroll .content': 'checkScroll'
  },

  renderCount: 0,

  render: function () {
    console.log(this.renderCount++);
    var content = "<div class=\"posts\">"
    // _(this.collection.last(100)).each(function (post) {
    // above breaks scrolling
    var that = this;
    this.collection.each(function (post){
      content += that.headline({post: post});
    });
    content += "</div>"
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
