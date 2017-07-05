
var app = app || {};

app.FlightsView = Backbone.View.extend({
    // el: "#flightsTable",
    tagName: "tr",

    events: {
        "click a":"showPage"
    },

    showPage: function(){
        var flightID = this.model.get('id');
        console.log(flightID);

    },
    render: function(){
        var rawTemplate = $('#FlightsViewTemplate').html();
        var template = _.template( rawTemplate );

        var markup = template( this.model.attributes );
        this.$el.html( markup );
        this.$el.appendTo('#flightsTable');
        console.log(markup);
        // debugger;
    }
});
