
var app = app || {};

app.FlightsView = Backbone.View.extend({
    el: "#flightsTable",

    events: {
        "click a":"showPage"
    },

    showPage: function(ev){
        var flightID = ev;
        console.log(flightID);
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
