
var app = app || {};

app.FlightsView = Backbone.View.extend({
<<<<<<< HEAD
=======
    // el: "#flightsTable",
>>>>>>> 5411af74fe63ecb21daef67a33fca8fc1696dba5
    tagName: "tr",

    events: {
        "click": "showPage"
    },

    showPage: function(){
<<<<<<< HEAD
        // var flightID = this.model.id;
        console.log('hello');
        // debugger;
=======
        var flightID = this.model.get('id');
        console.log(flightID);
        app.router.navigate("/flights/" + flightID, true);

>>>>>>> 5411af74fe63ecb21daef67a33fca8fc1696dba5
    },
    render: function(){
        var rawTemplate = $('#FlightsViewTemplate').html();
        var template = _.template( rawTemplate );

        var markup = template( this.model.attributes );
<<<<<<< HEAD
        this.$el.appendTo( markup );
=======
        this.$el.html( markup );
        this.$el.appendTo('#flightsTable');
>>>>>>> 5411af74fe63ecb21daef67a33fca8fc1696dba5
        console.log(markup);
        // debugger;
    }
});
