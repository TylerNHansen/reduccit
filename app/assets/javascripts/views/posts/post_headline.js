Redditclone.Views.PostHeadline = Backbone.View.extend({


  events: {
    "click .top-comment" : "toggleTopComment",
    "click .all-comments" : "toggleAllComments"
  },

  template: JST['posts/headline'],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    if(this.showTopComment){
      this.topCommentView.render();
      this.$el.find('.media-body').append(this.topCommentView.$el);
    }
    if (this.showAllComments) {
      debugger
      this.allCommentsView.render();
      this.$el.find('.media-body').append(this.allCommentsView.$el);
    }
    return this;
  },

  renderTopComment: function () {
    this.topCommentView.render();
    this.$el.find('.media-body').append(_(this.topCommentView.$el.html()).unescape());
  },

  toggleTopComment: function (event) {
    // only load the top comment once
    if(!this.topComment){
      this.showTopComment = true;
      // render/loading strategy:
      // make a comment model with the URL for grabbing the json
      this.topComment = new Redditclone.Collections.Comments([], {url: this.model.get('topCommentJson')})
      // make a view to handle displaying a comment
      this.topCommentView = new Redditclone.Views.CommentsIndex({collection: this.topComment});
      // wait for fetch to finish firing, then add in the top comment rendering
      this.listenToOnce(this.topComment, 'sync', this.render);
      this.topComment.fetch();
    } else {
      this.showTopComment = !this.showTopComment
      this.render();
    }
  },

  toggleAllComments: function (allComments) {

    if(!this.allComments){
      this.showAllComments = true;
      this.allComments = new Redditclone.Collections.Comments([], {url: this.model.get('allCommentsJson')})
      // make a view to handle displaying a comment
      this.allCommentsView = new Redditclone.Views.CommentsIndex({collection: this.allComments});
      // wait for fetch to finish firing, then add in the top comment rendering
      this.listenToOnce(this.allComments, 'sync', this.render);
      var that = this;
      this.allComments.fetch({
        success: function () {
          console.log(that);
          debugger;
        }
      });
    } else {
      this.showAllComments = !this.showAllComments
      this.render();
    }
  },

});
