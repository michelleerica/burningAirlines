var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#app",

    render: function(){

    var template = $("#AppViewTemplate").html();
    this.$el.html( template );

    var form = new app.SearchInputView();
    form.render();

    this.collection.each(function(flight){
        console.log("hello world.");
        var flv = new app.FlightsView({
            model: flight
        });
        flv.render();
    }); // each

    },
});
