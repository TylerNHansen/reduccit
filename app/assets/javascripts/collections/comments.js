 Redditclone.Collections.Comments = Backbone.Collection.extend({

  model: Redditclone.Models.Comment,

  url: "/api/reddit/test",

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    return Backbone.sync.apply(this, arguments);
  },

  parse: function (resp) {
    var children = [];
    if(resp.data.children){
      _(resp.data.children).each(function (childData) {
        children.push(new Redditclone.Models.Comment(childData, {parse: true}));
      })
      delete resp.data.children
    }
    return children;
  },
});