Redditclone.Views.PostHeadline = Backbone.View.extend({


  events: {
    "click .top-comment" : "toggleTopComment",
    "click .all-comments" : "toggleAllComments"
  },

  template: JST['posts/headline'],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
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
      this.model[attrName].fetch(
        {success: function () {
          that.appendComments(that[attrName + "View"]);
        }
      });
    } else {
      this[attrName + "View"].$el.toggleClass('hidden');
      this[attrName + "View"].$el.find('.comment').toggleClass('hidden', false);

    }
  },

  toggleTopComment: function (event) {
    this.toggleComments('topCommentJson', 'topComment');
  },

  toggleAllComments: function (event) {
    this.toggleComments('allCommentsJson', 'allComments');
  },

});
