// global collection

var app = app || {};

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

app.airplanes = new app.Airplanes();
app.flights = new app.Flights();
app.users = new app.Users();
app.reservations = new app.Reservations();

app.router = new app.AppRouter();

$(document).ready(function() {

    Backbone.history.start();

    app.airplanes.fetch();
    app.flights.fetch();
    app.users.fetch();
    app.reservations.fetch();



    // Check for new secrets on this server every 2s
    // (they will be automatically rendered thanks to our
    // collection's add event handler)
    // window.setInterval(function(){
    //     app.flights.fetch();
    // }, 2000);

}); // doc ready()
