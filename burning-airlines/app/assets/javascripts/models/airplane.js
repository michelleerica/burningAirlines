
var app = app || {};

app.Airplane = Backbone.Model.extend({
    urlRoot: '/airplanes',

    defaults: {
        row: 0,
        column: 0,
        name: "N/A"
    },

    initialize: function(){
        console.log("A new airplane model was created.");
    },
});
