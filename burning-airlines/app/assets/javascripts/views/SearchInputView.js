
var app = app || {};

app.SearchInputView = Backbone.View.extend({
    el: "#searchForm",

    events: {
        "click #search": "searchFlights",
        "click #cancel": "cancelSearch"
    },

    searchFlights: function(){
        var userInputDest = this.$el.find('#fromInput').val();
        var userInputArr = this.$el.find('#toInput').val();
        console.log(userInputDest, userInputArr);
        var searchMatches = app.flights.where({departure: userInputDest, arrival: userInputArr});
        $('td').remove();
        _.each( searchMatches, function( flight ){
            var sflv = new app.FlightsView({
                model: flight
            });
            sflv.render();
        });
    },

    cancelSearch: function(){
        this.$el.find('#fromInput').val('').focus();
        this.$el.find('#toInput').val('');
    },

    render: function(){
        var rawTemplate = $('#SearchInputViewTemplate').html();
        this.$el.html( rawTemplate );
    }



});
