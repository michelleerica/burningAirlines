
var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: "/airplanes",
  model: app.Airplane,

  initialize: function(){
    console.log('A new airplane collection was created.');
    this.on("add", function( airplane ){
      var name = airplane.get('name');
      console.log('A new airplane: ' + name + ' ...was created.');
    });
  }

});
