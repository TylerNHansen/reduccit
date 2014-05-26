Redditclone.Models.Post = Backbone.Model.extend({


  parse: function (resp) {
    var postData = _(resp.data).pick('url', 'title', 'domain');
    postData.imageURL = this.imageURL(postData.url, postData.domain);
    postData.permalink = "http://reddit.com" + resp.data.permalink
    return postData;
  },

  imageURL: function (url, domain) {
    var senchaFragment = "http://src.sencha.io/200/"
    // needs to check if gallery or album and handle those cases
    if(domain === 'imgur.com'){
      return senchaFragment + url + '.jpg';
    } else if (domain === 'i.imgur.com') {
      return senchaFragment + url;
    }
  },
});
