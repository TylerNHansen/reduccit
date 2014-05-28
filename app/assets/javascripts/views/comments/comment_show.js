Redditclone.Views.CommentShow = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
  },

  template: JST['comments/comment'],

  render: function () {
    var that = this
    var content = this.template({comment: this.model});
    this.$el.html(content);
    this.$el.addClass("comment panel panel-default")
    if(!this.model.get('replies')) return this;
    this.model.get('replies').each(function (comment) {
      replyView = new Redditclone.Views.CommentShow({model: comment});
      that.$el.append(replyView.render().$el)
    })
    return this;
  },

});