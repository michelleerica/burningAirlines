
var app = app || {};

app.SeatingChartView = Backbone.View.extend({
    el: '#detailsContainer',

    render: function(){
        // console.log('this.model', this.model);

        var rawTemplate = $('#seatingChart').html();
        var template = _.template( rawTemplate );
        var markup = template( this.model.attributes );
        var rowTotal = this.model.attributes.airplane.row;
        var colTotal = this.model.attributes.airplane.column;
        var rows = _.range(1, rowTotal+1);
        var columns = _.range(1, colTotal+1);
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var $seatTable = $('<table class="seatTable teal lighten-2"/>');
        console.log('$seatTable start:', $seatTable);
        _.each(rows, function(num){
            var $row = $("<tr>");
            $row.appendTo($seatTable);
            _.each(columns, function(n){
                var $column = $('<td class= "seat">').attr('row_no', num).attr('column_no', letters[n-1]);
                $column.appendTo($row);
            });
        });
        // debugger;
        this.$el.html( $seatTable );

        // this.$el.html("HELLO");


    },

    seatSelection: function(){

    },

    seatReservation: function(){

    }

});
