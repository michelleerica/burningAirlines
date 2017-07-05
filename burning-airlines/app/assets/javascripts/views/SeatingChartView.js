
var app = app || {};

app.SeatingChartView = Backbone.View.extend({
    el: '#detailsContainer',

    events: {
        "click td": "seatSelection",
        "click button": "seatReservation"
    },

    render: function(){
        console.log('hello you guyyyyysss.');
    },

    seatSelection: function(){

    },

    seatReservation: function(){

    }

});
