Redditclone.Views.CommentShow = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
  },

  template: JST['comments/comment'],

  render: function () {
    var content = this.template({comment: this.model});
    this.$el.html(content);

    return this;
  },

});