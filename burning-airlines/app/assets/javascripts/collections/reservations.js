
var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations",
  model: app.Reservation,

  initialize: function(){
    console.log('A new flight collection was created.');
    this.on("add", function( reservation ){
      var status = reservation.get('occupied');
      console.log('A new reservation: ' + status + ' ...was created.');
    });
  }

 });
