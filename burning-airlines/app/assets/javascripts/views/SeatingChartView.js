
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
                  "border-radius":"40px",
                  "font-family": "serif",
                  "text-align":"center",
                  "font-size":"30px"
                });
                $column.appendTo($row);
            });
        });
        this.$el.html( markup );
        this.$el.append( $seatTable );

        // Array of seats occupied
        var seatsOccupiedArray = [];
        var seatsOccupied = _.each(this.model.attributes.reservations, function(num){
          seatsOccupiedArray.push(num.seat_num);
        })
          console.log(seatsOccupiedArray);

          // if ($('td').eq(0).html() === seatsOccupiedArray[0]){
          //   $('td').eq(0).css("background-color","grey");
          // };
          // debugger;
          //NOT WORKING ----- loop identifying which td's have coordinates which match the seatsOccupiedArray
              // -> $('td').eq.length only equals 1/////
              // css is sometimes changing, but it switches back due to line 89 in on click (toggle function)
          console.log($('td').eq.length);
          for (var i = 0; i < $('td').eq.length; i++) {
            console.log(i);
            for (var j = 0; j < seatsOccupiedArray.length; j++) {
              console.log($('td').eq(i).text(),$('td').eq(i).html(), seatsOccupiedArray[j]);
              if ($('td').eq(i).text() === seatsOccupiedArray[j]) {
                $('td').eq(i).css("background-color","grey").off('click')
              };
            };
          };

        $(document).on('click', 'td', function(){
          //
          // if ($(this).css("background-color","grey")){
          //   return;
          // }
        // var selectedSeat = app.flights.fetch();
        // _.each(selectedSeat.responseJSON, function(num){
    	  //      _.each(num.reservations, function(reservation){
        //            console.log( "seat num:", reservation.seat_num);
        //        });
        // });
            // console.log(selectedSeat);
        //  if ( $(this).text() === ) ) {
        //    return;
        //  }
         $('td').not(this).removeClass('selected').css("background-color", "yellow");
         $(this).toggleClass('selected').css("background-color","green");


        //  valueToSave.seat_no = $(this).attr('seat_no');
        //  console.log("Current Seat: " + valueToSave.seat_no);
        });

    },

    seatSelection: function(){

    },

    seatReservation: function(){

    }

});
