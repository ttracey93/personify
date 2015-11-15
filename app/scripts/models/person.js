/*global Personify, Backbone*/

Personify.Models = Personify.Models || {};

(function () {
    'use strict';

    Personify.Models.Person = Backbone.Model.extend({

        url: function() {
            return Personify.Api.url + '/people/' + this.id;
        },

        initialize: function(id) {
            if(id != null) {
                this.id = id;
            }
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
