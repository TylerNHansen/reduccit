 Redditclone.Collections.Comments = Backbone.Collection.extend({

   initialize: function (models, options) {
     if(options && options.url) {
       this.url = options.url
     }
   },

  // model: Redditclone.Models.Comment,

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    options.url = this.url
    return Backbone.sync.apply(this, arguments);
  },

  // resp is either a POJO with attributes "kind" and "listing"
  // or it's an array containing two POJOS like the above
  // the first is for the top-level comment, second for replies
  parse: function (resp) {
    if (_(resp).isArray()) {
      return this.parse(resp[1]);
    }

    return _(resp.data.children).map(function (child) {
      return new Redditclone.Models.Comment(child, { parse: true });
    });
  },
});