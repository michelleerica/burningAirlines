
var app = app || {};

app.FlightsView = Backbone.View.extend({
    el: "#flightsTable",

    events: {
        "click a":"showPage"
    },

    showPage: function(){
        var flightID = this.model.id;
        console.log(flightID);
        debugger;
    },
    render: function(){
        var rawTemplate = $('#FlightsViewTemplate').html();
        var template = _.template( rawTemplate );

        var markup = template( this.model.attributes );
        this.$el.append( markup );
        console.log(markup);
        // debugger;
    }
});
