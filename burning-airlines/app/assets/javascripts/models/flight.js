
var app = app || {};

app.Flight = Backbone.Model.extend({
    urlRoot: '/flights',

    defaults: {
        name: 0,
        date: "0000-00-00",
        departure: "N/A",
        arrival: "N/A"
    },

    initialize: function(){
        console.log("A new flight model was created.");
    },
});
