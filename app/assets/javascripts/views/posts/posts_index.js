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
    var content = this.template();
    var posts = [];
    this.$el.html(content);
    var that = this;
    this.collection.each(function (post){
      var postHeadline = new Redditclone.Views.PostHeadline({model: post});
      posts.push(postHeadline);
      that.$el.append(postHeadline.render().$el);
    });

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
    if(!this.loading && ($(window).scrollTop() + $(window).height() + buffer > $(document).height()) ){
      this.loading = true;
      this.fetchMoreLinks();
    }
  },

});
