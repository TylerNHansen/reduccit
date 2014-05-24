Redditclone.Models.Post = Backbone.Model.extend({


  parse: function (resp) {

    var postData = _(resp.data).pick('url', 'title', 'domain');

    // if(postData.domain === 'imgur.com'){
      return postData;
    // }
  }
});
