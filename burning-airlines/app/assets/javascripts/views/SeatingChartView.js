
var app = app || {};

app.SeatingChartView = Backbone.View.extend({
    el: '#detailsContainer',

    events: {
        "click td": "seatSelection",
        "click button": "seatReservation"
    },

    render: function(){
        var rawTemplate = $('#seatingChart').html();
        var template = _.template( rawTemplate);
        // debugger;
        var markup = template( flight.attributes );
        this.$el.html( markup );
        console.log(markup);

    },

    seatSelection: function(){

    },

    seatReservation: function(){

    }

});
