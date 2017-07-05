
var app = app || {};

app.FlightsView = Backbone.View.extend({
    el: "#flightsTable",

    render: function(){
        var rawTemplate = $('#FlightsViewTemplate').html();
        var template = _.template( rawTemplate );

        var markup = template( this.model.attributes );
        this.$el.html( markup );
    }
});
