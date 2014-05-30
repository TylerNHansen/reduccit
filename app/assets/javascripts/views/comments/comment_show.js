Redditclone.Views.CommentShow = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
  },

  events: {
    "click" : "hideChildren",
    "click .panel" : "noProp"
  },

  noProp: function (event) {
    event.stopPropagation();
  },

  hideChildren: function (event) {
    // work in progress, also think I need .comments divs to nest properly
    event.stopPropagation();
    this.$el.find('.md').toggleClass('hidden');
    this.$el.find('.comments').toggleClass('hidden');
  },

  template: JST['comments/comment'],

  render: function () {
    var that = this
    var content = this.template({comment: this.model});
    this.$el.html(content);
    this.$el.addClass("comment");
    // var links = this.$el.find('a[href]');
    // debugger
    // links.each( function (index, link) {
    //   console.log(link);
    //   debugger;
    // });
    if(!this.model.get('replies')) return this;
    this.replyViews = new Redditclone.Views.CommentsIndex({ collection: this.model.get('replies') })
    this.$el.children().append(this.replyViews.render().$el)
    return this;
  },

});