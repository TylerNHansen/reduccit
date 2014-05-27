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

  parse: function (resp) {
    if (_(resp).isArray()) {
      return this.parse(resp[1]);
    }

    // function parseListing (listingChunk) {
    //   var commentChunks = listingChunk.data.children;
    //   if (!commentChunks) return [];
    //
    //   _(commentChunks).map(function (commentChunk) {
    //     return parseComment(commentChunk);
    //   })
    // }
    //
    // function parseComment (commentChunk) {
    //   return new Redditclone.Models.Comment(commentChunk, { parse: true });
    // }

    return _(resp.data.children).map(function (child) {
      return new Redditclone.Models.Comment(child, { parse: true });
    });

    //parseListing(resp);

    //
    //
    //
    // return parseListing(resp);
    //
    //
    // function _parse (data) {
    //    (data.kind)
    // }
    //
    // function _parse(resp) {
    //   var children = [];
    //   var that = this
    //   function parseChunk(chunk) {
    //     switch (chunk.kind) {
    //     case "Listing":
    //       return _parse(chunk.data.children);
    //     case "t1": // t1 is comments
    //       return [new Redditclone.Models.Comment(chunk, {parse: true})];
    //     default:
    //     }
    //   }
    //
    //   _(resp).each(function (chunk) {
    //     parseChunk(chunk).forEach(function (comment){
    //       children.push(comment)
    //     });
    //   })
    //
    //   return children;
    // }
    //
    // return _parse(resp);
  },
});