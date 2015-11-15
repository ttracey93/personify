/*global Personify, Backbone*/

Personify.Models = Personify.Models || {};

(function () {
    'use strict';

    Personify.Models.Person = Backbone.Model.extend({

        idAttribute: '_id',

        url: function() {
            if(this.get('_id')) {
                return Personify.Api.url + '/people/' + this.id;
            }
            else {
                return Personify.Api.url + '/people/';
            }
        },

        initialize: function(id) {
            if(id != null) {
                this.id = id;
            }
        },

        defaults: {
            'first_name': '',
            'last_name': '',
            'date_of_birth': '',
            'zip': ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
