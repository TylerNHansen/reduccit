 Redditclone.Collections.Comments = Backbone.Collection.extend({

   initialize: function (options) {
     if(options && options.url) {
       this.url = options.url
     } else {
       this.url = "http://www.reddit.com/r/ftlgame/comments/26lqp2/about_death_rays/.json"
     }
   },

  model: Redditclone.Models.Comment,

  sync: function(method, model, options) {
    options.dataType = 'jsonp';
    options.url = this.url
    return Backbone.sync.apply(this, arguments);
  },

  parse: function (resp) {

    function _parse(resp) {
      var children = [];
      var that = this
      function parseChunk(chunk) {
        switch (chunk.kind) {
        case "Listing":
          return _parse(chunk.data.children);
          break;
        case "t1": // t1 is comments
          return [new Redditclone.Models.Comment(chunk, {parse: true})];
          break;
        default:
          break;
        }
      }
      while(resp.length){
        children.push.apply(children, (parseChunk(resp.pop())));
      }
      return children;
    }

    return _parse(resp);
  },
});