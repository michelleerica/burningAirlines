
var app = app || {};

app.User = Backbone.Model.extend({
    urlRoot: '/users',

    defaults: {
        firstname: "Unknown",
        surname: "Unknown",
        is_admin: false,
        email: "N/A"
    },

    initialize: function(){
        console.log("A new user model was created.");
    }
});
