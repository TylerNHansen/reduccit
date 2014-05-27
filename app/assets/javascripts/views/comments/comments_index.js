Redditclone.Views.CommentsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['comments/index'],
  headline: JST['posts/headline'],

  render: function () {
    var content = this.template({
      comments: this.collection,
    });
    var comments = [];
    this.$el.html(content);
    var that = this;
    this.collection.each(function (comment){
      var commentView = new Redditclone.Views.CommentShow({model: comment});
      comments.push(commentView);
      that.$el.append(commentView.render().$el);
    });

    return this;
  },


});
