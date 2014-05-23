Redditclone.Views.PostsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove change reset', this.render);
  },

  template: JST['posts/index'],

  render: function () {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    return this;
  },

});
