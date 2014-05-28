Redditclone.Views.PostNew = Backbone.View.extend({

  template: JST['posts/new'],
  imgurPublicAuth: "Client-ID 7b3298a442371f9",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'submit': 'test'
  },

  test: function (event) {
    event.preventDefault();
    var file = document.getElementById('upload_file').files[0];
    var reader = new FileReader();
    var that = this;
    reader.onload = function (e) {
      localStorage.imageBase64 = reader.result.replace(/.*,/, '');
      that.postToImgur(function(resp){console.log(resp);});
    }
    reader.readAsDataURL(file);
  },

  // posts the file to imgur using my app's public auth string,
  // gets a response, and calls the callback passing as arg.
  postToImgur: function (callback) {


    $.ajax({
      url: "https://api.imgur.com/3/image",
      method: "POST",
      data: {
        image: localStorage.imageBase64,
        type: 'base64'
      },
      headers: {
        Authorization: this.imgurPublicAuth,
        Accept: 'application/json'
       },
      success: callback
    })
  },



});

// code snippets from chrome debugger tool
// var files = document.getElementById('upload_file').files[0]
// var r = new FileReader();