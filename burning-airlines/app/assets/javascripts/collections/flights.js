
var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",
  model: app.Flight,

  initialize: function(){
    console.log('A new flight collection was created.');
    this.on("add", function( flight ){
      var name = flight.get('name');
      console.log('A new airplane: ' + name + ' ...was created.');

      var flightsView = new app.FlightsView({
         model: flight
      });

      flightsView.render();
    });
} // init

 });
