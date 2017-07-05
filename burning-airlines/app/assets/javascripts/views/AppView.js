var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#app",

    render: function(){
    var template = $("#AppViewTemplate").html();
    this.$el.html( template );

    this.collection.each(function(flight){
        var flv = new app.FlightsView({
            model: flight
        });
        flv.render();
    });


    },
});
