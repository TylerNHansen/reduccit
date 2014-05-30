Redditclone.Models.Post = Backbone.Model.extend({
  // no URL attribute for grabbing a particular post

  parse: function (resp) {
    var postData = _(resp.data).pick('url', 'title', 'domain', 'over_18');
    postData.imageURL = this.imageURL(postData.url, postData.domain);
    postData.permalink = "http://reddit.com" + resp.data.permalink;
    postData.topCommentJson = postData.permalink + ".json?jsonp=?&sort=top&limit=1";
    postData.allCommentsJson = postData.permalink + ".json?jsonp=?&sort=top"
    return postData;
  },

  imageURL: function (url, domain) {
    var senchaFragment = "http://src" + this.shardNum() + ".sencha.io/200/";
    if (/\.(jpg|gif|png)$/.test(url)) {
      return senchaFragment + url;
    } else if(domain === 'imgur.com'){
      return senchaFragment + url + '.jpg';
    } else {

    }

  },

  // shards 1, 2, and 3 for loading thumbnails
  // shard 4 is reserved for popovers
  shardNum: (function() {
    var num = 1;
    return function () {
      num = (num % 3) + 1;
      return num;
    }
  }())
});
