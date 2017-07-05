
var app = app || {};


app.AppRouter = Backbone.Router.extend({
  // This is like the Rails routes.rb file:
  routes: {
    '': 'search',
    // 'airplanes': 'showPlanes',
    'flights': 'showFlights',
    'flights/:id': 'showFlight'
  },

  search: function(){
      console.log("search action started.");
      var av = new app.AppView({
          collection: app.flights
      });
      av.render();
  },

  showFlights: function(){

  },

  showFlight: function( id ){

      var flight = app.flights.get( id );
      console.log(flight);
      var scv = new app.SeatingChartView({
          model: flight
      });
      console.log(scv);
      scv.render();
  }


});
