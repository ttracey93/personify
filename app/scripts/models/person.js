/*global Personify, Backbone*/

Personify.Models = Personify.Models || {};

(function () {
    'use strict';

    Personify.Models.Person = Backbone.Model.extend({

        idAttribute: '_id',

        url: function() {
            return Personify.Api.url + '/people/' + this.get('_id');
        },

        initialize: function(id) {
            if(id != null) {
                this.set('_id', id);
                this.id = id;
                this._id = id;
            }
        },

        defaults: {
            '_id': '',
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
