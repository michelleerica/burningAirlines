
var app = app || {};

app.FlightsView = Backbone.View.extend({
    tagName: "tr",

    events: {
        "click": "showPage"
    },

    showPage: function(){
        // var flightID = this.model.id;
        console.log('hello');
        // debugger;
    },
    render: function(){
        var rawTemplate = $('#FlightsViewTemplate').html();
        var template = _.template( rawTemplate );

        var markup = template( this.model.attributes );
        this.$el.appendTo( markup );
        console.log(markup);
        // debugger;
    }
});
