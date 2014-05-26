Redditclone.Views.CommentShow = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
  },

  template: JST['comment'],

  render: function () {
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  },

});