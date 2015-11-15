/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.Person = Backbone.View.extend({

        template: JST['app/scripts/templates/person.ejs'],

        el: '#child-container',

        events: {},

        initialize: function (id) {
            this.model = new Personify.Models.Person(id);

            this.model.fetch();

            this.render();
        },

        render: function () {
            var el = this.el;
            var t = this.template;
            var m = this.model;

            this.model.on('sync', function() {
                $(el).html(t(m.toJSON()));
            });
        }

    });

})();
