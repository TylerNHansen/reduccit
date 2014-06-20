Redditclone.Views.PostHeadline = Backbone.View.extend({


  events: {
    "click .top-comment" : "topCommentModal",
    "click .all-comments" : "toggleAllComments"
  },

  template: JST['posts/headline'],
  commentTemplate: JST['comments/comment'],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.toggleClass('post', true);
    if(this.model.get('over_18')){
      console.log(this.model.get('over_18'));
      this.$el.toggleClass('nsfw', true);
      this.$el.toggleClass('nsfw-hidden', !Redditclone.over18)
    }
    this.$el.html(content);
    return this;
  },

  topCommentModal: function (event) {
    if(!this.model.topComment){
      var that = this;
      this.model.topComment = new Redditclone.Collections.Comments([], {url: this.model.get('topCommentJson')});
      this.model.topComment.fetch({
        success: function () {
          var content = that.commentTemplate({comment: that.model.topComment.first()});
          that.$el.find('.modal-body').html(content);
          that.topCommentModal();
        }
      });
    } else {
      this.$el.find('.top-comment-modal').modal();
    }
  },

  appendComments: function (subview) {
    this.$el.find('.media-body').append(subview.$el);
  },

  toggleComments: function (source, attrName) {
    // load if not present
    if(!this.model[attrName]){
      // maybe delegate this to a helper method inside the post model
      // I'm reaching into this.model twice
      this.model[attrName] = new Redditclone.Collections.Comments([], {url: this.model.get(source)});

      this[attrName + "View"] = new Redditclone.Views.CommentsIndex({collection: this.model[attrName]});

      var that = this;

      // shove comments in once we have them
      this.model[attrName].fetch({
        success: function () {
          that.appendComments(that[attrName + "View"]);
        }
      });
    } else {
      this[attrName + "View"].$el.toggleClass('hidden');
      this[attrName + "View"].$el.find('*').toggleClass('hidden', false);

    }
  },

  toggleTopComment: function (event) {
    this.toggleComments('topCommentJson', 'topComment');
  },

  toggleAllComments: function (event) {
    this.toggleComments('allCommentsJson', 'allComments');
  },

});
