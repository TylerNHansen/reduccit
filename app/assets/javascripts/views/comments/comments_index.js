Redditclone.Views.CommentsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['comments/index'],
  headline: JST['posts/headline'],

  render: function () {
    this.$el.addClass('comments');
    var that = this;
    var commentViews = [];
    this.collection.each(function (comment){
      var commentView = new Redditclone.Views.CommentShow({model: comment});
      commentViews.push(commentView);
      that.$el.append(commentView.render().$el);
    });

    return this;
  },


});
