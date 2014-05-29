Redditclone.Views.PostsIndex = Backbone.View.extend({

  initialize: function () {
    var that = this;
    $(window).bind('scroll', function (event) {
      that.checkScroll(event);
    });
    this.loading = false;
    Redditclone.postsIndex = this;
    this.listenTo(this.collection, 'sync', this.renderNewHeadlines);
  },

  // template: JST['posts/index'],
  headline: JST['posts/headline'],

  events: {
    'scroll .content': 'checkScroll'
  },

  render: function () {
    this.headlines = [];
    this.$el.toggleClass('posts', true);
    this.renderNewHeadlines();

    return this;
  },

  renderNewHeadlines: function () {
    var toDraw = this.collection.reject(function(post){return post.get('rendered')});
    var that = this;
    _(toDraw).each(function (post) {
      post.set({'rendered': true})
      var postHeadline = new Redditclone.Views.PostHeadline({model: post});
      that.headlines.push(postHeadline);
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
