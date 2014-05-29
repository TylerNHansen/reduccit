Redditclone.Views.CommentShow = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
  },

  events: {
    "click" : "hideSelf"
  },

  hideSelf: function (event) {
    event.stopPropagation();
    this.$el.toggleClass('hidden', true);
  },

  template: JST['comments/comment'],

  render: function () {
    var that = this
    var content = this.template({comment: this.model});
    this.$el.html(content);
    this.$el.addClass("comment");
    if(!this.model.get('replies')) return this;
    this.replyViews = new Redditclone.Views.CommentsIndex({ collection: this.model.get('replies') })
    this.$el.append(this.replyViews.render().$el)
    return this;
  },

});