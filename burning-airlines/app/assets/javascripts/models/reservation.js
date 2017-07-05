
var app = app || {};

app.Reservation = Backbone.Model.extend({
    urlRoot: '/reservations',

    defaults: {
        seat_row: 0,
        seat_column: 0,
        occupied: true
    },

    initialize: function(){
        console.log("A new reservation model was created.");
    }
});
