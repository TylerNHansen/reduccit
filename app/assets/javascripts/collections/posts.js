 Redditclone.Collections.Posts = Backbone.Collection.extend({

  model: Redditclone.Models.Post,

  url: "/api/reddit/test",

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    options.url='http://reddit.com/r/anonyreddit.json?jsonp=?';

    return Backbone.sync.apply(this, arguments);
  },


  // convert response from server to a list of models to add to collection
  parse: function (resp) {
    var children = [];
    if(resp.data.children){
      _(resp.data.children).each(function (childData) {
        children.push(new Redditclone.Models.Post(childData, {parse: true}));
        // need to build an object to return?
      })
      delete resp.data.children
    }
    return children;
  },
});
