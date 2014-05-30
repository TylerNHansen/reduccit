Redditclone.Views.PostsIndex = Backbone.View.extend({

  initialize: function () {
    var that = this;
    $(window).bind('scroll', function (event) {
      that.checkScroll(event);
    });
    this.loading = false;
    Redditclone.postsIndex = this;
    this.listenTo(this.collection, 'sync', this.renderNewHeadlines);
    $("body").popover({
      content: function() {return that.imgTag(this.href)},
      trigger: 'hover',
      selector: '.posts a[href]',
      html: 'true',
      placement: function () {
        // mysteriously closes over the triggering var 'event'
        var screenPos = event.target.offsetTop - event.currentTarget.scrollTop;
        var halfPos = window.innerHeight / 2;
        return (screenPos > halfPos) ? "top" : "bottom";
      },
      container: "body",
     });
     $("#over_18").change(function () {
       $('.nsfw').toggleClass('nsfw-hidden', !this.checked);
       Redditclone.over18 = this.checked;
     })
  },

  // template: JST['posts/index'],
  headline: JST['posts/headline'],
  preview: JST['preview'],

  events: {
    'scroll .content': 'checkScroll',
  },

  imgTag: function (url) {
    url += url.match(/imgur/) ? ".jpg" : "";
    return '<img src="http://src4.sencha.io/500/500/' + url + '" />';
  },

  render: function () {
    this.headlines = [];
    this.$el.toggleClass('posts', true);
    this.renderNewHeadlines();
    return this;
  },

  renderNewHeadlines: function () {
    // TODO: fix parsing posts
    if(!this.collection.first() || this.collection.first().get('subreddit')) return undefined;
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
