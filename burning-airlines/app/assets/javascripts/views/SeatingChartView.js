
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
        var $seatTable = $('<table class="seatTable"/>').css({
            'background-color' : "white",
            "border-collapse": "separate",
            'border-spacing' : "40px",
            'border':"1px solid black",
            "max-width" :"600px",

    });
        console.log('$seatTable start:', $seatTable);
        _.each(rows, function(num){

            var $row = $("<tr>");
            $row.appendTo($seatTable);
            _.each(columns, function(n){
                var seat_no = num + letters[n-1];
                var $column = $('<td>').attr('seat_no', seat_no).text(seat_no)
                .css({
                  'border':"1px solid red",
                  'background-color' : "yellow",
                  "border-collapse": "separate",
                  'border-spacing' : "20px",
                  "width" : "40px",
                  "height" : "50px",
                  "border-radius":"40px",

                });
                $column.appendTo($row);
            });
        });
        this.$el.html( markup );
        this.$el.append( $seatTable );

        $(document).on('click', 'td', function(){
        //  if ( $(this).hasClass('reserved') ) {
        //    return;
        //  }
         $('td').not(this).removeClass('selected').css("background-color", "yellow");
         $(this).toggleClass('selected').css("background-color","grey");


        //  valueToSave.seat_no = $(this).attr('seat_no');
        //  console.log("Current Seat: " + valueToSave.seat_no);
        });

    },

    seatSelection: function(){

    },

    seatReservation: function(){

    }

});
