/*global Personify, Backbone*/

Personify.Collections = Personify.Collections || {};

(function () {
    'use strict';

    Personify.Collections.People = Backbone.Collection.extend({

        template: JST['app/scripts/templates/people_collection.ejs'],

        item_template: JST['app/scripts/templates/person_item.ejs'],

        el: '#people-collection-container',

        item_el: '#people-collection',

        model: Personify.Models.Person,

        url: function() {
            return Personify.Api.url + '/people';
        },

        parse: function(response) {
            console.log(response);
            return response;
        },

        render: function() {
            $(this.el).html(this.template());

            var item_el = this.item_el;
            var item_template = this.item_template;

            console.log(this.models);

            this.models.forEach(function(model) {
                console.log(model);

                try {
                    if(model.get('first_name') != null && model.get('first_name') != '') {
                        $(item_el).append(item_template(model.attributes));
                    }
                }
                catch(ex) {
                    console.log(ex);
                }

            });
        }

    });

})();
