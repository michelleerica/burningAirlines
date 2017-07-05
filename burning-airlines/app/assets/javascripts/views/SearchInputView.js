
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
