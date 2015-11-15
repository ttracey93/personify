/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.People = Backbone.View.extend({

        template: JST['app/scripts/templates/people.ejs'],
        
        el: '#child-container',

        events: {
            'click #add_a_person': function() {
                window.router.navigate('#/people/new', {trigger: true});
            }
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());

            var people = new Personify.Collections.People();

            people.fetch();

            people.on('sync', function() {
                people.render();
            });
        }

    });

})();
