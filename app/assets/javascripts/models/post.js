Redditclone.Models.Post = Backbone.Model.extend({
  // no URL attribute for grabbing a particular post

  parse: function (resp) {
    var postData = _(resp.data).pick('url', 'title', 'domain');
    postData.imageURL = this.imageURL(postData.url, postData.domain);
    postData.permalink = "http://reddit.com" + resp.data.permalink;
    postData.topCommentJson = postData.permalink + ".json?jsonp=?&sort=top&limit=1";
    postData.allCommentsJson = postData.permalink + ".json?jsonp=?&sort=top"
    return postData;
  },

  imageURL: function (url, domain) {
    var senchaFragment = "http://src.sencha.io/200/"
    if (/\.(jpg|gif|png)$/.test(url)) {
      return senchaFragment + url;
    } else if(domain === 'imgur.com'){
      return senchaFragment + url + '.jpg';
    } else {

    }

  },
});
