Redditclone.Views.PostHeadline = Backbone.View.extend({


  events: {
    "click .btn" : "toggleTopComment"
  },

  template: JST['posts/headline'],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  renderTopComment: function () {
    this.topCommentView.render();
    this.$el.find('.media-body').append(_(this.topCommentView.$el.html()).unescape());
  },

  toggleTopComment: function (event) {
    // only load the top comment once
    if(!this.topComment){
      // render/loading strategy:
      // make a comment model with the URL for grabbing the json
      this.topComment = new Redditclone.Models.Comment({url: this.model.get('topCommentJson')})
      // make a view to handle displaying a comment
      this.topCommentView = new Redditclone.Views.CommentShow({model: this.topComment});
      // wait for fetch to finish firing, then add in the top comment rendering
      this.listenToOnce(this.topComment, 'sync', this.renderTopComment);
      this.topComment.fetch();
    } else {
      this.render();
    }
  },

});
