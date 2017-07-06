
var app = app || {};

app.SeatingChartView = Backbone.View.extend({
    el: '#detailsContainer',

    render: function(){
        var rawTemplate = $('#seatingChart').html();
        var template = _.template( rawTemplate);
        // debugger;
        var markup = template( this.model.attributes );
        this.$el.html( markup );
        console.log(markup);
        var plane = this.model
        debugger;
        var scv = new app.SeatSchematicView({
            model: plane
        });

    },

    seatSelection: function(){

    },

    seatReservation: function(){

    }

});
