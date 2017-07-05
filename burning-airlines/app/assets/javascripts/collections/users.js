
var app = app || {};

app.Users = Backbone.Collection.extend({
  url: "/users",
  model: app.User,

  initialize: function(){
    console.log('A new flight collection was created.');
    this.on("add", function( user ){
      var user = user.get('firstname');
      console.log('A new user: ' + user + ' ...was created.');
    });
  }

 });
